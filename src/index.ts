import TelegramBot from 'node-telegram-bot-api';
import { MoneySender } from './money-sender';

function main() {
	const bot = new TelegramBot(process.env.BOT_ID);
	global.bot = bot;

	const moneySender = new MoneySender();

	moneySender.start();
}

main();
