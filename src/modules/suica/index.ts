import { config } from "@modules/config";
import { Logger } from "@utils/logger";
import { chromium } from "playwright";
import { NUMBERS, OPERATING_HOURS, SELECTORS, URLS } from "@/constants";
import type { ProcessMode } from "@/types";
import { login } from "./auth";
import { ChargeExtractor, HistoryExtractor } from "./extractors";

const isWithinOperatingHours = (): boolean => {
	// 日本時間で計算
	const now = new Date();
	const jstOffset = NUMBERS.JST_OFFSET_MINUTES; // JST は UTC+9
	const utcTime =
		now.getTime() + now.getTimezoneOffset() * NUMBERS.MS_CONVERSION;
	const jstTime = new Date(utcTime + jstOffset * NUMBERS.MS_CONVERSION);

	const hours = jstTime.getHours();
	const minutes = jstTime.getMinutes();
	const currentTime = hours * NUMBERS.TIME_MULTIPLIER + minutes;

	// 5:00 = 500, 24:50 (0:50) = 50
	if (hours >= 5) {
		return currentTime >= OPERATING_HOURS.START_TIME; // 5:00 以降
	} else {
		return currentTime <= OPERATING_HOURS.END_TIME; // 0:50 まで
	}
};

export const suicaModule = async (mode: ProcessMode = "both") => {
	const logger = Logger("Suica");

	if (!isWithinOperatingHours()) {
		logger.error("Suicaモジュールは5:00から24:50までしか実行できません");
		return false;
	}
	// セキュリティのため、パスワードは表示しない
	logger.debug(
		JSON.stringify(
			{
				...config,
				jreUserPass: config.jreUserPass ? "***" : "",
			},
			null,
			2,
		),
	);

	if (!config.jreUserId || !config.jreUserPass) {
		logger.error(
			"JREのユーザーIDまたはパスワードが設定されていません。環境変数を確認してください。",
		);
		return false;
	}

	const browser = await chromium.launch({
		headless: false,
	});
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto(URLS.TOP_PAGE);
	const isLoginSuccess = await login(
		page,
		config.jreUserId,
		config.jreUserPass,
	);
	if (!isLoginSuccess) {
		logger.error("ログイン失敗");
		return false;
	}

	// 現在の月のデータを抽出（必要に応じて月を指定可能）
	const now = new Date();
	const targetMonth = {
		year: now.getFullYear(),
		month: now.getMonth() + 1, // JavaScriptの月は0ベースなので+1
	};

	try {
		// 履歴の抽出
		if (mode === "history" || mode === "both") {
			await page.locator(SELECTORS.BUTTONS.HISTORY).click();
			await page.waitForLoadState("networkidle");

			const extractor = new HistoryExtractor(page);
			await extractor.extractAndDownloadGroups(targetMonth);
			logger.info(
				`${targetMonth.year}年${targetMonth.month}月の履歴グループのPDFダウンロードが完了しました`,
			);

			// メニューページに戻る
			if (mode === "both") {
				await page.goto(URLS.MEMBER_MENU);
				await page.waitForLoadState("networkidle");
			}
		}

		// チャージ領収書の抽出
		if (mode === "charge" || mode === "both") {
			const chargeExtractor = new ChargeExtractor(
				page,
				config.recipientCompany,
			);
			await chargeExtractor.extractAndDownloadAllCharges(targetMonth);
			logger.info(
				`${targetMonth.year}年${targetMonth.month}月のチャージ領収書のダウンロードが完了しました`,
			);
		}
	} catch (error) {
		logger.error(`処理中にエラーが発生しました: ${error}`);
		return false;
	} finally {
		logger.info("完了しました！");
	}
};
