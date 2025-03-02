import TelegramBot from 'node-telegram-bot-api';
import { bot } from './bot';
import internal from 'node:stream';

/**
 * Sends an animation to the chat from env variable TELEGRAM_CHAT_ID.
 * @param url The URL of the animation file.
 * @param options Additional Telegram options.
 */
export function sendAnimation(
	url: string | internal.Stream | Buffer,
	options?: TelegramBot.SendAnimationOptions,
) {
	if (!process.env.TELEGRAM_CHAT_ID) {
		throw new Error('TELEGRAM_CHAT_ID is not defined');
	}

	return bot.sendAnimation(process.env.TELEGRAM_CHAT_ID, url, options);
}
