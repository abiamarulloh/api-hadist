package main

import (
	"hadist-bot/libs/env"
	"hadist-bot/libs/env/qa"
	"log"
	"strings"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

func main() {
	token := env.GetEnv("BOT_ACCESS_TOKEN")
	bot, err := tgbotapi.NewBotAPI(token)
	if err != nil {
		panic(err)
	}

	bot.Debug = true
	// Create a new UpdateConfig struct with an offset of 0. Offsets are used
	// to make sure Telegram knows we've handled previous values and we don't
	// need them repeated.
	updateConfig := tgbotapi.NewUpdate(0)

	// Tell Telegram we should wait up to 30 seconds on each request for an
	// update. This way we can get information just as quickly as making many
	// frequent requests without having to send nearly as many.
	updateConfig.Timeout = 30

	// Start polling Telegram for updates.
	updates := bot.GetUpdatesChan(updateConfig)

	// Let's go through each update that we're getting from Telegram.
	for update := range updates {
		// Telegram can send many types of updates depending on what your Bot
		// is up to. We only want to look at messages for now, so we can
		// discard any other updates.
		if update.Message == nil {
			continue
		}

		// Create a new MessageConfig. We don't have text yet,
		// so we leave it empty.
		msg := tgbotapi.NewMessage(update.Message.Chat.ID, "")

		var userCommand = update.Message.Command()
		var userText = update.Message.Text

		if userCommand != "" {
			if userCommand == "help" {
				msg.Text = "I understand /sayhi and /status."
			} else if userCommand == "sayhi" {
				msg.Text = "Hi :)"
			} else if userCommand == "status" {
				msg.Text = "I'm ok."
			} else {
				msg.Text = "I don't know that command"
			}
		} else if userText != "" {
			templates := qa.Template
			for _, val := range templates {
				if len(val.Question) > 1 {
					// loop sample text
					for _, valqa := range val.Question {
						if valqa == userText || strings.Contains(strings.ToLower(valqa), strings.ToLower(userText)) {
							msg.Text = val.Answer
							break
						}
					}
				} else {
					if strings.Contains(strings.ToLower(val.Question[0]), strings.ToLower(userText)) || strings.ToLower(val.Question[0]) == strings.ToLower(userText) {
						msg.Text = val.Answer
						break
					}
				}
			}
			if msg.Text == "" {
				msg.Text = "Mohon maaf, saya belum mengerti apa yang kamu maksud, coba ketik 'hai' atau ketik 'hadist'"
			}
		}

		if _, err := bot.Send(msg); err != nil {
			log.Panic(err)
		}
	}
}
