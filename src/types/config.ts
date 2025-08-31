/**
 * 設定関連の型定義
 */

/**
 * アプリケーション設定
 */
export interface AppConfig {
	/** JRE ユーザーID */
	jreUserId: string;
	/** JRE パスワード */
	jreUserPass: string;
	/** 領収書の宛先会社名 */
	recipientCompany: string;
	/** 出力先ディレクトリ（オプション） */
	outputDir?: string;
}

/**
 * 環境変数の型
 */
export interface EnvVariables {
	/** JRE ユーザーID */
	JRE_USER_ID?: string;
	/** JRE パスワード */
	JRE_USER_PASS?: string;
	/** 領収書の宛先会社名 */
	RECIPIENT_COMPANY?: string;
	/** 出力先ディレクトリ */
	OUTPUT_DIR?: string;
}
