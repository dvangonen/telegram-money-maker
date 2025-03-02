import { fetchRandomGif } from '@/api/giphy/fetch-random-gif';
import { schedule } from 'node-cron';
import { MONEY_AFFIRMATIONS } from './consts/money-affirmations';
import { MONEY_EMOJIS } from './consts/money-emojis';
import { sendAnimation } from '@/api/telegram-bot/send-animation';
import { sendMessage } from '@/api/telegram-bot/send-message';

const MONEY_QUERY = 'money cash';

/**
 * This is a service that sends money GIFs to the chat every minute.
 */
export class MoneySenderService {
	constructor() {}

	public start() {
		const job = schedule(
			'* * * * *',
			() => {
				this.sendMessage();
			},
			{
				runOnInit: true,
			},
		);

		job.start();
	}

	private getRandomAffirmation() {
		return MONEY_AFFIRMATIONS[Math.floor(Math.random() * MONEY_AFFIRMATIONS.length)];
	}

	private getRandomEmoji() {
		return MONEY_EMOJIS[Math.floor(Math.random() * MONEY_EMOJIS.length)];
	}

	private async sendMessage() {
		const url = await fetchRandomGif(MONEY_QUERY);

		const emoji = this.getRandomEmoji();
		const text = this.getRandomAffirmation();
		const caption = `${text} ${emoji}`;

		if (!url) {
			console.error('Error fetching GIF');
			return;
		}

		sendAnimation(url, {
			caption,
		});
		sendMessage(caption);
	}
}
