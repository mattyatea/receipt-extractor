import { Logger } from "@utils/logger";
import type { Page } from "playwright";
import { SELECTORS, STRINGS, TIMEOUTS } from "@/constants";

export const login = async (
	page: Page,
	jreUserId: string,
	jreUserPass: string,
): Promise<boolean> => {
	const logger = Logger("SuicaLogin");

	logger.info("login Now...");

	await page.getByText(STRINGS.BUTTONS.JRE_LOGIN, { exact: true }).click();
	await page.getByRole("link", { name: STRINGS.BUTTONS.LOGIN_JRE_ID }).click();
	await page.locator(SELECTORS.LOGIN.ID_INPUT).click();
	await page.locator(SELECTORS.LOGIN.ID_INPUT).fill(jreUserId);
	await page.locator(SELECTORS.LOGIN.PASSWORD_INPUT).click();
	await page.locator(SELECTORS.LOGIN.PASSWORD_INPUT).fill(jreUserPass);

	logger.info("login Info Filling...");

	await page
		.getByRole("button", { name: STRINGS.BUTTONS.DO_LOGIN, exact: true })
		.click();
	try {
		await page
			.getByRole("heading", { name: STRINGS.LOGIN_SUCCESS_TEXT })
			.waitFor({ state: "visible", timeout: TIMEOUTS.LOGIN_WAIT });
		return true;
	} catch (error) {
		logger.error(`Login failed or timed out: ${error}`);
		return false;
	}
};
