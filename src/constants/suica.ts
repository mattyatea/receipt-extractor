/**
 * Suica関連の定数
 */

/**
 * URL定数
 */
export const URLS = {
	/** モバイルSuicaのトップページ */
	TOP_PAGE: "https://www.mobilesuica.com/index.aspx",
	/** 会員メニューのトップページ */
	MEMBER_MENU: "https://www.mobilesuica.com/cm/lb/TransferTopMenu.aspx",
} as const;

/**
 * CSSセレクタ
 */
export const SELECTORS = {
	/** ログイン関連 */
	LOGIN: {
		/** JRE IDの入力フィールド */
		ID_INPUT: 'input[name="id"]',
		/** パスワードの入力フィールド */
		PASSWORD_INPUT: "#password",
	},
	/** ボタン */
	BUTTONS: {
		/** 利用明細書（領収書）ボタン */
		STATEMENT: "#btn_usrStatement",
		/** SF履歴ボタン */
		HISTORY: "#btn_sfHistory",
		/** 印刷ボタンのプレフィックス */
		PRINT_PREFIX: "Use_SF_PrintButton",
	},
	/** チャージ領収書関連 */
	CHARGE: {
		/** 宛先1入力フィールド */
		RECEIPT_ADDRESS1: 'input[name="receiptAddress1"]',
		/** 宛先2入力フィールド */
		RECEIPT_ADDRESS2: 'input[name="receiptAddress2"]',
		/** 種別選択 */
		TYPE_SELECT: "#Select0",
		/** 開始月選択 */
		MONTH_FROM: 'select[name="selMonthF"]',
		/** 開始日選択 */
		DAY_FROM: 'select[name="selDayF"]',
		/** 終了月選択 */
		MONTH_TO: 'select[name="selMonthT"]',
		/** 終了日選択 */
		DAY_TO: 'select[name="seldayT"]',
	},
	/** 履歴関連 */
	HISTORY_CHECKBOX: 'input[name="printCheck"]',
} as const;

/**
 * タイムアウト値（ミリ秒）
 */
export const TIMEOUTS = {
	/** ログイン待機時間 */
	LOGIN_WAIT: 100000,
	/** PDFダウンロード待機時間 */
	PDF_DOWNLOAD: 30000,
	/** チャージPDFダウンロード待機時間 */
	CHARGE_PDF_DOWNLOAD: 10000,
	/** ダウンロード後の待機時間 */
	AFTER_DOWNLOAD: 500,
	/** 次の処理前の待機時間 */
	BETWEEN_OPERATIONS: 1000,
} as const;

/**
 * 正規表現パターン
 */
export const PATTERNS = {
	/** 日付パターン（MM/DD形式） */
	DATE_MMDD: /^(\d{2})\/(\d{2})$/,
	/** 日付パターン（YY/MM/DD形式） */
	DATE_YYMMDD: /\d{2}\/\d{2}\/\d{2}/,
	/** チャージ金額パターン */
	CHARGE_AMOUNT: /入金（チャージ）額：([\d,]+)円/,
	/** 印刷ボタンIDパターン */
	PRINT_BUTTON_ID: /Use_SF_PrintButton(\d+)/,
} as const;

/**
 * 文字列定数
 */
export const STRINGS = {
	/** ボタンテキスト */
	BUTTONS: {
		/** JRE IDでログイン */
		JRE_LOGIN: "JRE IDでログイン",
		/** ログイン（JRE ID） */
		LOGIN_JRE_ID: "ログイン（JRE ID）",
		/** ログインする */
		DO_LOGIN: "ログインする",
		/** 表示 */
		DISPLAY: "表示",
		/** 選択した履歴を印刷 */
		PRINT_SELECTED: "選択した履歴を印刷",
	},
	/** 種別 */
	TYPES: {
		/** カード */
		CARD: "ｶｰﾄﾞ",
		/** モバイル */
		MOBILE: "モバイル",
	},
	/** ファイル名の接尾辞 */
	FILE_SUFFIX: {
		/** 入出記録 */
		HISTORY: "入出記録",
		/** チャージ */
		CHARGE: "チャージ",
	},
	/** メッセージ */
	LOGIN_SUCCESS_TEXT: "会員メニューではSuica",
	/** デフォルト会社名 */
	DEFAULT_COMPANY: "株式会社Example",
} as const;

/**
 * 数値定数
 */
export const NUMBERS = {
	/** JST時差（分） */
	JST_OFFSET_MINUTES: 9 * 60,
	/** ミリ秒変換係数 */
	MS_CONVERSION: 60000,
	/** 時間計算用係数 */
	TIME_MULTIPLIER: 100,
	/** Unicode変換オフセット（半角→全角） */
	UNICODE_OFFSET: 0xfee0,
	/** 会社名分割の最大文字数仮定値 */
	COMPANY_NAME_MAX_CHARS: 10,
} as const;

/**
 * 営業時間
 */
export const OPERATING_HOURS = {
	/** 開始時刻（5:00） */
	START_TIME: 500,
	/** 終了時刻（0:50） */
	END_TIME: 50,
} as const;

/**
 * 種別選択の値
 */
export const TICKET_TYPES = {
	/** SFチャージ */
	SF_CHARGE: "2",
} as const;
