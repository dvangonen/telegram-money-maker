import { getRandomGif } from '@/api/getRandomGif';
import { schedule } from 'node-cron';

export class MoneySender {
	constructor() {}

	public start() {
		schedule(
			'0/30 0 * * * *',
			() => {
				this.sendMessage();
			},
			{
				runOnInit: true,
			},
		);
	}

	private getRandomText() {
		const texts = [
			'Here is your money!',
			'You got some cash!',
			'You are rich now!',
			'Money money money!',
			'Cash incoming!',
			'You got some money!',
			'You are a millionaire now!',
			'You are rich!',
		];

		return texts[Math.floor(Math.random() * texts.length)];
	}

	private async sendMessage() {
		const text = this.getRandomText();
		const url = await getRandomGif('money cash');

		if (!url) {
			console.error('Error fetching GIF');
			return;
		}

		bot.sendAnimation(process.env.CHAT_ID, url, {
			caption: text,
		});
	}
}
