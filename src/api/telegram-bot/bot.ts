import TelegramBot from 'node-telegram-bot-api';

if (!process.env.TELEGRAM_BOT_ID) {
	throw new Error('TELEGRAM_BOT_ID is not defined');
}

/**
 * The Telegram bot instance with the TELEGRAM_BOT_ID from the environment variables.
 */
export const bot = new TelegramBot(process.env.TELEGRAM_BOT_ID);
