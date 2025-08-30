/**
 * Suica関連の型定義
 */

/**
 * Suica履歴アイテム
 */
export interface SuicaHistoryItem {
	/** 日付 (MM/DD形式) */
	date: string;
	/** 種別1 */
	type1: string;
	/** 場所1 */
	location1: string;
	/** 種別2 */
	type2: string;
	/** 場所2 */
	location2: string;
	/** 残高 */
	balance: string;
	/** 金額 (+/-付き) */
	amount: string;
	/** チェックボックスの状態 */
	checkbox: boolean;
	/** インデックス */
	index: number;
}

/**
 * Suica履歴グループ（チャージとそれに関連する取引）
 */
export interface SuicaHistoryGroup {
	/** チャージ記録 */
	chargeRecord: SuicaHistoryItem;
	/** チャージに関連する取引 */
	transactions: SuicaHistoryItem[];
}

/**
 * チャージ記録
 */
export interface ChargeRecord {
	/** 日付 (YY/MM/DD形式) */
	date: string;
	/** 金額 (カンマ区切り) */
	amount: string;
	/** ボタンのインデックス */
	index: number;
}

/**
 * 対象年月
 */
export interface TargetMonth {
	/** 年 */
	year: number;
	/** 月 */
	month: number;
}

/**
 * 処理モード
 */
export type ProcessMode = "history" | "charge" | "both";

/**
 * 会社名分割結果
 */
export interface CompanyNameParts {
	/** 前半部分（最大12文字） */
	part1: string;
	/** 後半部分（最大12文字） */
	part2: string;
}
