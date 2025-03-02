import TelegramBot from 'node-telegram-bot-api';
import { MoneySenderService } from './money-sender-service';

/**
 * Main function that starts the bot.
 */
function main() {
	// All services should be started here
	const moneySenderService = new MoneySenderService();

	moneySenderService.start();
}

main();
