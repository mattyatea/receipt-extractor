import { Logger } from "@utils/logger";
import { splitCompanyName } from "@utils/textConverter";
import type { Page } from "playwright";
import { STRINGS } from "@/constants";
import type { ChargeRecord, TargetMonth } from "@/types";

const logger = Logger("ChargeExtractor");

export class ChargeExtractor {
	private page: Page;
	private recipientCompany: string;

	constructor(page: Page, recipientCompany: string) {
		this.page = page;
		this.recipientCompany = recipientCompany;
	}

	async navigateToChargeRecords(): Promise<void> {
		// チャージ記録画面に遷移
		await this.page.locator("#btn_usrStatement").click();
		await this.page.waitForLoadState("networkidle");
	}

	async setRecipient(companyName?: string): Promise<void> {
		const recipient = companyName || this.recipientCompany;

		// 会社名を全角に変換して分割
		const { part1, part2 } = splitCompanyName(recipient);

		// 宛先を入力
		await this.page.locator('input[name="receiptAddress1"]').click();
		await this.page.locator('input[name="receiptAddress1"]').fill(part1);
		await this.page.locator('input[name="receiptAddress2"]').click();
		await this.page.locator('input[name="receiptAddress2"]').fill(part2);
	}

	async selectChargeType(): Promise<void> {
		// 種別を「SFチャージ」に選択
		await this.page.locator("#Select0").selectOption("2");
	}

	async setDateRange(year: number, month: number): Promise<void> {
		// 開始日を月初に設定
		const monthSelectValue = `${year}/${month} ${year}/${month}`;
		await this.page
			.locator('select[name="selMonthF"]')
			.selectOption(monthSelectValue);
		await this.page.locator('select[name="selDayF"]').selectOption("1 1");

		// 終了日を月末に設定
		await this.page
			.locator('select[name="selMonthT"]')
			.selectOption(monthSelectValue);

		// 月末日を計算
		const lastDay = new Date(year, month, 0).getDate();
		await this.page
			.locator('select[name="seldayT"]')
			.selectOption(`${lastDay} ${lastDay}`);
	}

	async displayChargeRecords(): Promise<void> {
		// 表示ボタンを押す
		await this.page
			.getByRole("button", { name: STRINGS.BUTTONS.DISPLAY })
			.click();
		await this.page.waitForLoadState("networkidle");
	}

	async extractChargeRecords(): Promise<ChargeRecord[]> {
		// JavaScriptで直接DOM操作して情報を取得
		const items = await this.page.evaluate(() => {
			const results: { date: string; amount: string; index: number }[] = [];
			const rows = document.querySelectorAll("tr");

			rows.forEach((row) => {
				// rowspanがある場合を考慮して、各セルを取得
				const cells = row.querySelectorAll("td");
				let dateCell = null;
				let contentCell = null;
				let buttonCell = null;

				// 各セルを確認
				cells.forEach((cell) => {
					// 日付セルの確認
					const dateFont = cell.querySelector("font.sl");
					if (dateFont?.textContent?.match(/\d{2}\/\d{2}\/\d{2}/)) {
						dateCell = dateFont;
					}

					// コンテンツセルの確認
					const listTitle = cell.querySelector("ul li.list_title");
					if (listTitle?.textContent?.includes("入金（チャージ）額：")) {
						contentCell = listTitle;
					}

					// ボタンセルの確認
					const button = cell.querySelector(
						'button[id^="Use_SF_PrintButton"]',
					);
					if (button) {
						buttonCell = button as HTMLButtonElement;
					}
				});

				// 必要な要素がすべて揃っている場合のみ処理
				if (dateCell && contentCell && buttonCell) {
					const dateText = (dateCell as HTMLElement).textContent?.trim() || "";
					const contentText =
						(contentCell as HTMLElement).textContent?.trim() || "";
					const buttonId = (buttonCell as HTMLButtonElement).id;

					// 金額を抽出（「入金（チャージ）額：X,XXX円」から）
					const amountMatch =
						contentText.match(/入金（チャージ）額：([\d,]+)円/);
					if (amountMatch) {
						const amount = amountMatch[1];
						// インデックスを抽出（Use_SF_PrintButtonX から）
						const indexMatch = buttonId.match(/Use_SF_PrintButton(\d+)/);
						const index = indexMatch ? parseInt(indexMatch[1], 10) : -1;

						results.push({
							date: dateText,
							amount: amount,
							index: index,
						});
					}
				}
			});

			return results;
		});

		return items;
	}

	async downloadChargePDF(
		record: ChargeRecord,
		year: number,
		month: number,
	): Promise<void> {
		// PDFダウンロード処理
		const downloadPromise = this.page.waitForEvent("download", {
			timeout: 10000,
		});

		// 印刷ボタンをクリック
		const printButton = this.page.locator(`#Use_SF_PrintButton${record.index}`);
		await printButton.click();

		try {
			// ダウンロードを待機（タイムアウトを短く設定）
			const download = await downloadPromise;

			// ファイル名を生成（YYYYMM_MMDD_金額円_suica.pdf）
			const yearMonth = `${year}${month.toString().padStart(2, "0")}`;
			// 日付を変換（YY/MM/DD -> MMDD）
			const dateParts = record.date.split("/");
			const monthDay =
				dateParts.length >= 2
					? `${dateParts[1].padStart(2, "0")}${dateParts[2].padStart(2, "0")}`
					: record.date.replace(/\//g, "");

			const fileName = `${yearMonth}_${monthDay}_${record.amount.replace(",", "")}円_チャージ_suica.pdf`;
			await download.saveAs(fileName);

			logger.info(`チャージ領収書をダウンロード: ${fileName}`);

			// ボタンがdisabledになるまで少し待機
			await this.page.waitForTimeout(500);
		} catch (error) {
			// ダウンロードのタイムアウトが発生した場合でも、実際にはダウンロードが成功している可能性がある
			// ボタンがdisabledになっているかチェック
			const isDisabled = await printButton.evaluate(
				(button) =>
					button.hasAttribute("disabled") ||
					button.classList.contains("disableButton"),
			);
			if (isDisabled) {
				logger.info(
					`チャージ領収書をダウンロード: ${record.date} ${record.amount}円 (確認済み)`,
				);
			} else {
				throw error;
			}
		}
	}

	async extractAndDownloadAllCharges(targetMonth?: TargetMonth): Promise<void> {
		// 対象年月を設定（指定されていない場合は現在月）
		const now = new Date();
		const year = targetMonth?.year || now.getFullYear();
		const month = targetMonth?.month || now.getMonth() + 1;

		logger.info(`${year}年${month}月のチャージ領収書を抽出します`);

		// チャージ記録画面に遷移
		await this.navigateToChargeRecords();

		// 宛先を設定
		await this.setRecipient();

		// 種別を選択
		await this.selectChargeType();

		// 日付範囲を設定
		await this.setDateRange(year, month);

		// 表示
		await this.displayChargeRecords();

		// ページが完全に読み込まれるまで待機
		await this.page.waitForLoadState("networkidle");

		// チャージ記録を抽出
		const records = await this.extractChargeRecords();

		// デバッグ: 抽出された記録を表示
		logger.debug("抽出されたチャージ記録:");
		records.forEach((record, i) => {
			logger.debug(
				`  ${i}: index=${record.index}, date=${record.date}, amount=${record.amount}`,
			);
		});

		// インデックスで重複を除去
		const uniqueRecords = records.filter(
			(record, index, self) =>
				index === self.findIndex((r) => r.index === record.index),
		);

		logger.info(
			`チャージ記録数: ${uniqueRecords.length}件 (元の記録数: ${records.length}件)`,
		);

		// 各チャージ記録のPDFをダウンロード
		for (let i = 0; i < uniqueRecords.length; i++) {
			const record = uniqueRecords[i];
			logger.info(
				`  ${i + 1}/${uniqueRecords.length} ${record.date} ${record.amount}円をダウンロード中...`,
			);

			try {
				await this.downloadChargePDF(record, year, month);
				// 次のダウンロード前に少し待機
				await this.page.waitForTimeout(1000);
			} catch (error) {
				logger.error(`  ⚠️ ダウンロード失敗: ${error}`);
			}
		}

		logger.info(
			`\n✅ ${year}年${month}月のチャージ領収書のダウンロードを完了しました`,
		);
	}
}
