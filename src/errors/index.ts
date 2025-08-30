/**
 * カスタムエラークラス
 */

/**
 * Suicaモジュールの基底エラークラス
 */
export class SuicaError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "SuicaError";
	}
}

/**
 * ログインエラー
 */
export class LoginError extends SuicaError {
	constructor(message: string = "ログインに失敗しました") {
		super(message);
		this.name = "LoginError";
	}
}

/**
 * ダウンロードエラー
 */
export class DownloadError extends SuicaError {
	constructor(message: string = "ダウンロードに失敗しました") {
		super(message);
		this.name = "DownloadError";
	}
}

/**
 * 営業時間外エラー
 */
export class OutOfServiceError extends SuicaError {
	constructor(
		message: string = "モバイルSuicaの営業時間外です（5:00～24:50）",
	) {
		super(message);
		this.name = "OutOfServiceError";
	}
}

/**
 * 設定エラー
 */
export class ConfigError extends SuicaError {
	constructor(message: string = "設定が不正です") {
		super(message);
		this.name = "ConfigError";
	}
}

/**
 * タイムアウトエラー
 */
export class TimeoutError extends SuicaError {
	constructor(message: string = "タイムアウトしました") {
		super(message);
		this.name = "TimeoutError";
	}
}
