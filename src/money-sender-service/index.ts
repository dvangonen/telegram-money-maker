import { fetchRandomGif } from '@/api/giphy/fetch-random-gif';
import { schedule } from 'node-cron';
import { MONEY_AFFIRMATIONS } from './consts/money-affirmations';
import { sendAnimation } from '@/api/telegram-bot/send-animation';

const MONEY_QUERY = 'funny cat';

/**
 * This is a service that sends money GIFs to the chat every minute.
 */
export class MoneySenderService {
	constructor() {}

	public start() {
		const job = schedule('0 */6 * * *', () => {
			this.sendMessage();
		});

		job.start();
	}

	private getRandomAffirmation() {
		return MONEY_AFFIRMATIONS[Math.floor(Math.random() * MONEY_AFFIRMATIONS.length)];
	}

	private async sendMessage() {
		const url = await fetchRandomGif(MONEY_QUERY);

		const text = this.getRandomAffirmation();
		const caption = Math.floor(Math.random() * 5) % 2 === 0 ? text : '';

		if (!url) {
			console.error('Error fetching GIF');
			return;
		}

		sendAnimation(url, {
			caption,
		});
	}
}
