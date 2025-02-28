// Define types for process.env

import TelegramBot from 'node-telegram-bot-api';

declare global {
	var bot: TelegramBot;

	namespace NodeJS {
		interface ProcessEnv {
			BOT_ID: string;
			CHAT_ID: string;
		}
	}
}
