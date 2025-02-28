// Define types for process.env

import TelegramBot from 'node-telegram-bot-api';

declare global {
	var bot: TelegramBot;

	namespace NodeJS {
		interface ProcessEnv {
			TELEGRAM_BOT_ID: string;
			TELEGRAM_CHAT_ID: string;
		}
	}
}
