import TelegramBot from 'node-telegram-bot-api';
import { bot } from './bot';

/**
 * Sends a message to the chat from env variable TELEGRAM_CHAT_ID.
 * @param text The text of the message.
 * @param options Additional Telegram options.
 */
export function sendMessage(text: string, options?: TelegramBot.SendMessageOptions) {
	if (!process.env.TELEGRAM_CHAT_ID) {
		throw new Error('TELEGRAM_CHAT_ID is not defined');
	}

	return bot.sendMessage(process.env.TELEGRAM_CHAT_ID, text, options);
}
