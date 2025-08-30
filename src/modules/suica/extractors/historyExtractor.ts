import * as fs from "node:fs/promises";
import { Logger } from "@utils/logger";
import type { Page } from "playwright";
import type { SuicaHistoryGroup, SuicaHistoryItem } from "@/types";

const logger = Logger("HistoryExtractor");

export class HistoryExtractor {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async extractAllHistory(targetMonth?: {
		year: number;
		month: number;
	}): Promise<SuicaHistoryItem[]> {
		const historyItems: SuicaHistoryItem[] = [];

		// テーブル内のすべての行を取得（ヘッダー行を除く）
		await this.page.waitForSelector('input[name="printCheck"]');

		// 対象月を設定（指定されていない場合は現在月）
		const now = new Date();
		const year = targetMonth?.year || now.getFullYear();
		const month = targetMonth?.month || now.getMonth() + 1;

		// JavaScriptで直接DOM操作して情報を取得
		interface ExtractedItem {
			index: number;
			date: string;
			type1: string;
			location1: string;
			type2: string;
			location2: string;
			balance: string;
			amount: string;
		}

		const items = await this.page.evaluate(
			({ targetMonth }: { targetMonth: number }) => {
				const results: ExtractedItem[] = [];
				const checkboxes = document.querySelectorAll(
					'input[name="printCheck"]',
				);
				let foundPreviousMonthCharge = false;

				checkboxes.forEach((checkbox) => {
					const input = checkbox as HTMLInputElement;
					const value = input.value;

					// チェックボックスの親行を取得
					let row = input.parentElement;
					while (row && row.tagName !== "TR") {
						row = row.parentElement;
					}

					if (row) {
						const cells = row.querySelectorAll("td");
						if (cells.length >= 8) {
							const dateText = cells[1]?.textContent?.trim() || "";
							const type1 = cells[2]?.textContent?.trim() || "";
							const location1 = cells[3]?.textContent?.trim() || "";
							const amount = cells[7]?.textContent?.trim() || "";

							// 日付をパース（MM/DD形式）
							const match = dateText.match(/^(\d{2})\/(\d{2})$/);
							if (match) {
								const itemMonth = parseInt(match[1], 10);
								// const itemDay = parseInt(match[2]);

								// チャージ履歴かどうか判定
								const isCharge =
									type1 === "ｶｰﾄﾞ" &&
									location1 === "モバイル" &&
									amount.startsWith("+");

								// 対象月のデータ、または前月の最後のチャージ履歴を抽出
								if (itemMonth === targetMonth) {
									results.push({
										index: parseInt(value, 10),
										date: dateText,
										type1: type1,
										location1: location1,
										type2: cells[4]?.textContent?.trim() || "",
										location2: cells[5]?.textContent?.trim() || "",
										balance: cells[6]?.textContent?.trim() || "",
										amount: amount,
									});
								} else if (
									itemMonth === targetMonth - 1 &&
									isCharge &&
									!foundPreviousMonthCharge
								) {
									// 前月の最後のチャージ履歴を含める
									foundPreviousMonthCharge = true;
									results.push({
										index: parseInt(value, 10),
										date: dateText,
										type1: type1,
										location1: location1,
										type2: cells[4]?.textContent?.trim() || "",
										location2: cells[5]?.textContent?.trim() || "",
										balance: cells[6]?.textContent?.trim() || "",
										amount: amount,
									});
								}
							}
						}
					}
				});

				return results;
			},
			{ targetMonth: month },
		);

		// 取得したデータをSuicaHistoryItem形式に変換
		for (const item of items) {
			historyItems.push({
				...item,
				checkbox: true,
			});
		}

		logger.info(`${year}年${month}月のデータを抽出: ${historyItems.length}件`);
		return historyItems;
	}

	groupHistoryByCharge(history: SuicaHistoryItem[]): {
		groups: SuicaHistoryGroup[];
		orphanTransactions: SuicaHistoryItem[];
	} {
		const groups: SuicaHistoryGroup[] = [];
		const orphanTransactions: SuicaHistoryItem[] = [];
		let currentGroup: SuicaHistoryGroup | null = null;

		// 履歴を逆順にして、古い順から処理
		const reversedHistory = [...history].reverse();

		for (const item of reversedHistory) {
			const isCharge =
				item.type1 === "ｶｰﾄﾞ" &&
				item.location1 === "モバイル" &&
				item.amount.startsWith("+");

			if (isCharge) {
				// 前のグループがあれば保存
				if (currentGroup) {
					groups.push(currentGroup);
				}
				// 新しいグループを開始（チャージ履歴を含める）
				currentGroup = {
					chargeRecord: item,
					transactions: [],
				};
			} else if (currentGroup) {
				// チャージ後の取引を追加
				currentGroup.transactions.push(item);
			} else {
				// チャージ履歴が見つかるまでの取引は孤立した取引として記録
				orphanTransactions.push(item);
			}
		}

		// 最後のグループを追加
		if (currentGroup) {
			groups.push(currentGroup);
		}

		// グループと孤立した取引を元の順序（新しい順）に戻す
		return {
			groups: groups.reverse(),
			orphanTransactions: orphanTransactions.reverse(),
		};
	}

	async uncheckAll(): Promise<void> {
		// JavaScriptで全チェックボックスを外す
		await this.page.evaluate(() => {
			const checkboxes = document.querySelectorAll(
				'input[name="printCheck"]',
			) as NodeListOf<HTMLInputElement>;
			checkboxes.forEach((checkbox) => {
				checkbox.checked = false;
			});
		});
	}

	async checkHistoryItems(items: SuicaHistoryItem[]): Promise<void> {
		// JavaScriptで指定されたチェックボックスをチェック
		const indices = items.map((item) => item.index);
		await this.page.evaluate((indices) => {
			indices.forEach((index) => {
				const checkbox = document.querySelector(
					`input[name="printCheck"][value="${index}"]`,
				) as HTMLInputElement;
				if (checkbox) {
					checkbox.checked = true;
				}
			});
		}, indices);
	}

	async downloadPDF(fileName: string): Promise<void> {
		const downloadPromise = this.page.waitForEvent("download", {
			timeout: 30000,
		});
		await this.page.getByRole("button", { name: "選択した履歴を印刷" }).click();
		const download = await downloadPromise;

		await download.saveAs(fileName);
	}

	async saveOrphanTransactionsToMarkdown(
		orphanTransactions: SuicaHistoryItem[],
		yearMonth: string,
	): Promise<void> {
		if (orphanTransactions.length === 0) {
			return;
		}

		let markdown = `# チャージ履歴と紐付かない取引\n\n`;
		markdown += `## ${yearMonth.slice(0, 4)}年${yearMonth.slice(4, 6)}月\n\n`;
		markdown += `**注意**: 以下の取引はチャージ履歴と紐付けることができませんでした。\n\n`;
		markdown += `| 日付 | 種別1 | 場所1 | 種別2 | 場所2 | 残高 | 金額 |\n`;
		markdown += `|------|-------|-------|-------|-------|------|------|\n`;

		for (const transaction of orphanTransactions) {
			markdown += `| ${transaction.date} | ${transaction.type1} | ${transaction.location1} | ${transaction.type2} | ${transaction.location2} | ${transaction.balance} | ${transaction.amount} |\n`;
		}

		const fileName = `${yearMonth}_orphan_transactions.md`;
		await fs.writeFile(fileName, markdown, "utf-8");
		logger.info(
			`\n⚠️ チャージ履歴と紐付かない取引を ${fileName} に保存しました`,
		);
	}

	async extractAndDownloadGroups(targetMonth?: {
		year: number;
		month: number;
	}): Promise<void> {
		const allHistory = await this.extractAllHistory(targetMonth);
		const { groups, orphanTransactions } =
			this.groupHistoryByCharge(allHistory);

		// 対象年月を取得
		const now = new Date();
		const year = targetMonth?.year || now.getFullYear();
		const month = targetMonth?.month || now.getMonth() + 1;
		const yearMonth = `${year}${month.toString().padStart(2, "0")}`;

		logger.info(`履歴数: ${allHistory.length}`);
		logger.info(`グループ数: ${groups.length}`);

		// 孤立した取引がある場合はMarkdownに出力
		if (orphanTransactions.length > 0) {
			logger.info(
				`\n⚠️ チャージ履歴と紐付かない取引: ${orphanTransactions.length}件`,
			);
			await this.saveOrphanTransactionsToMarkdown(
				orphanTransactions,
				yearMonth,
			);
		}

		// デバッグ用: 最初の数件の履歴を表示
		logger.debug("最初の5件の履歴:");
		allHistory.slice(0, 5).forEach((item, index) => {
			logger.debug(
				`  ${index + 1}. ${item.date} ${item.type1} ${item.location1} ${item.amount}`,
			);
		});

		for (let i = 0; i < groups.length; i++) {
			const group = groups[i];
			const itemsToCheck = [group.chargeRecord, ...group.transactions];

			logger.info(`\nグループ ${i + 1} を処理中...`);

			// チャージ履歴かどうかを判定して表示
			const isCharge =
				group.chargeRecord.type1 === "ｶｰﾄﾞ" &&
				group.chargeRecord.location1 === "モバイル" &&
				group.chargeRecord.amount.startsWith("+");

			let fileName: string;
			if (isCharge) {
				logger.info(
					`  チャージ: ${group.chargeRecord.date} ${group.chargeRecord.amount}`,
				);
				logger.info(`  チャージ後の取引数: ${group.transactions.length}`);

				// チャージ日時を取得（MM/DD形式）
				const chargeDate = group.chargeRecord.date.replace("/", ""); // MM/DD -> MMDD
				// チャージ金額を取得（+記号と,を除去）
				const chargeAmount = group.chargeRecord.amount.replace(/[+,]/g, "");

				// ファイル名: YYYYMM_MMDD_金額円_入出記録_suica.pdf
				fileName = `${yearMonth}_${chargeDate}_${chargeAmount}円_入出記録_suica.pdf`;
			} else {
				logger.info(
					`  開始取引: ${group.chargeRecord.date} ${group.chargeRecord.type1} ${group.chargeRecord.amount}`,
				);
				logger.info(`  関連取引数: ${group.transactions.length}`);

				// チャージ以外の場合は取引日と種別を含める
				const transactionDate = group.chargeRecord.date.replace("/", "");
				const transactionType = group.chargeRecord.type1;

				fileName = `${yearMonth}_${transactionDate}_${transactionType}_入出記録_suica.pdf`;
			}

			await this.uncheckAll();

			await this.checkHistoryItems(itemsToCheck);

			await this.downloadPDF(fileName);

			logger.info(`グループ ${i + 1} のPDFを ${fileName} として保存しました`);

			// 次のグループ処理前に少し待機
			await this.page.waitForTimeout(1000);
		}
	}
}
