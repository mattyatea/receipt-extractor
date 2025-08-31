import * as path from "node:path";
import * as fs from "node:fs/promises";
import { config } from "@/modules/config";

/**
 * 出力先ディレクトリのパスを取得
 * 環境変数OUTPUT_DIRが設定されていればそれを使用、なければデフォルトで'output'ディレクトリを使用
 */
export function getOutputDir(): string {
	return config.outputDir || path.join(process.cwd(), 'output');
}

/**
 * ファイルの出力パスを生成
 * @param fileName ファイル名
 * @returns 完全なファイルパス
 */
export function getOutputPath(fileName: string): string {
	return path.join(getOutputDir(), fileName);
}

/**
 * 出力先ディレクトリが存在することを確認し、存在しない場合は作成
 */
export async function ensureOutputDir(): Promise<void> {
	const outputDir = getOutputDir();
	try {
		await fs.access(outputDir);
	} catch {
		await fs.mkdir(outputDir, { recursive: true });
	}
}