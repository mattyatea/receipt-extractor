import type { CompanyNameParts } from "@/types";

/**
 * Convert half-width alphanumeric characters to full-width
 * 半角英数字を全角に変換
 */
export const toFullWidth = (text: string): string => {
	return text.replace(/[A-Za-z0-9]/g, (char) => {
		// Get the character code
		const code = char.charCodeAt(0);

		// Convert to full-width
		// A-Z: 0x41-0x5A → 0xFF21-0xFF3A (difference: 0xFEE0)
		// a-z: 0x61-0x7A → 0xFF41-0xFF5A (difference: 0xFEE0)
		// 0-9: 0x30-0x39 → 0xFF10-0xFF19 (difference: 0xFEE0)
		return String.fromCharCode(code + 0xfee0);
	});
};

/**
 * Convert half-width spaces to full-width spaces
 * 半角スペースを全角スペースに変換
 */
export const convertSpacesToFullWidth = (text: string): string => {
	return text.replace(/ /g, "　");
};

/**
 * Convert company name to proper format for Suica receipts
 * 会社名をSuica領収書用の形式に変換
 */
export const formatCompanyName = (companyName: string): string => {
	// First convert alphanumeric to full-width
	let formatted = toFullWidth(companyName);

	// Convert spaces to full-width
	formatted = convertSpacesToFullWidth(formatted);

	return formatted;
};

/**
 * Split company name into two parts for Suica form
 * 会社名を2つの部分に分割（Suicaフォーム用）
 */
export const splitCompanyName = (companyName: string): CompanyNameParts => {
	// Format the company name first
	const formatted = formatCompanyName(companyName);

	// Common patterns for splitting
	const patterns = [
		/^(株式会社|有限会社|合同会社|一般社団法人|一般財団法人|特定非営利活動法人|ＮＰＯ法人)(.+)$/,
		/^(.+)(株式会社|有限会社|合同会社|Ｉｎｃ\.|Ｃｏｒｐ\.|Ｌｔｄ\.|ＬＬＣ)$/,
	];

	for (const pattern of patterns) {
		const match = formatted.match(pattern);
		if (match) {
			return {
				part1: match[1].trim(),
				part2: match[2].trim(),
			};
		}
	}

	// If no pattern matches, try to split by space
	const spaceIndex = formatted.indexOf("　");
	if (spaceIndex !== -1) {
		return {
			part1: formatted.substring(0, spaceIndex).trim(),
			part2: formatted.substring(spaceIndex + 1).trim(),
		};
	}

	// If still no split possible, check length
	// If too long for one field (assuming max 10 characters), split in middle
	if (formatted.length > 10) {
		const midPoint = Math.ceil(formatted.length / 2);
		return {
			part1: formatted.substring(0, midPoint),
			part2: formatted.substring(midPoint),
		};
	}

	// Default: put everything in part2 with "株式会社" in part1
	return {
		part1: "株式会社",
		part2: formatted,
	};
};

/**
 * Examples of usage:
 *
 * formatCompanyName("Example Corp") → "Ｅｘａｍｐｌｅ　Ｃｏｒｐ"
 * formatCompanyName("ABC123 Company") → "ＡＢＣ１２３　Ｃｏｍｐａｎｙ"
 *
 * splitCompanyName("株式会社Example") → { part1: "株式会社", part2: "Ｅｘａｍｐｌｅ" }
 * splitCompanyName("Example Inc.") → { part1: "Ｅｘａｍｐｌｅ", part2: "Ｉｎｃ．" }
 */
