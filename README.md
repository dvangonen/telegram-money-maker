# Telegram Money Maker

## Description
Telegram Money Maker is a project designed to automate and optimize your earnings through Telegram.
This tool helps you manage and monetize your Telegram channels and groups efficiently.

## Features
- Automated message posting
- Analytics and reporting
- User management
- Monetization tools

## Installation
1. Clone the repository:
	```bash
	git clone https://github.com/yourusername/telegram-money-maker.git
	```
2. Navigate to the project directory:
	```bash
	cd telegram-money-maker
	```
3. Install the dependencies:
	```bash
	pnpm install
	```

## Usage
1. Obtain your Telegram Bot ID by creating a new bot through the [BotFather](https://core.telegram.org/bots#botfather) on Telegram.
2. Get your Giphy ID by signing up for an API key on the [Giphy Developers](https://developers.giphy.com/) website.
3. Create a `.env` and `.env.development` files in the project directory with the following content:
	```
	TELEGRAM_BOT_ID=your-telegram-bot-id
	GIPHY_TOKEN=your-giphy-id
	TELEGRAM_CHAT_ID=your-telegram-chat-id
	```
4. Run the application:
	```bash
	npm start
	```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
