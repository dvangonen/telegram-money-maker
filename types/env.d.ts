declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TELEGRAM_BOT_ID: string;
			TELEGRAM_CHAT_ID: string;
			GIPHY_TOKEN: string;
		}
	}
}
