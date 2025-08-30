import "dotenv/config";
import type { AppConfig } from "@/types";

export const config: AppConfig = {
	jreUserId: process.env.JRE_USER_ID || "",
	jreUserPass: process.env.JRE_USER_PASS || "",
	recipientCompany: process.env.RECIPIENT_COMPANY || "株式会社Example",
};
