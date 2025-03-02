import TelegramBot from 'node-telegram-bot-api';
import { MoneySenderService } from './money-sender-service';

/**
 * Main function that starts the bot.
 */
function main() {
	const bot = new TelegramBot(process.env.TELEGRAM_BOT_ID);
	global.bot = bot;

	// All services should be started here
	const moneySenderService = new MoneySenderService();

	moneySenderService.start();
}

main();
