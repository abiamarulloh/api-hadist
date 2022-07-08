package main

import (
	"hadist-bot/libs/env"
	"hadist-bot/libs/env/api"
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
		// log.Println(userText, "utatas")
		if userCommand != "" {
			// log.Println(userText, "ut cmd")
			if userCommand == "help" {
				msg.Text = "I understand /sayhi and /status."
			} else if userCommand == "sayhi" {
				msg.Text = "Hi :)"
			} else if userCommand == "status" {
				msg.Text = "I'm ok."
			} else {
				msg.Text = "I don't know that command"
			}
			if msg.Text == "" {
				msg.Text = "Mohon maaf, saya belum mengerti apa yang kamu maksud, coba ketik 'hai' atau ketik 'menu' untuk melihat menu utama"
			}
			if _, err := bot.Send(msg); err != nil {
				log.Panic(err)
			}
		} else if userText != "" {
			// msg ==
			// log.Println(userText, "ut text")
			if strings.ToLower(userText) == "hai" || strings.ToLower(userText) == "hello" || strings.ToLower(userText) == "hi" || strings.ToLower(userText) == "halo" || strings.ToLower(userText) == "pagi" || strings.ToLower(userText) == "siang" || strings.ToLower(userText) == "sore" || strings.ToLower(userText) == "malam" {
				msg.Text = "Hai " + update.Message.From.FirstName + " :) " + "\n\n" + qa.MainMenu
				// send message
				if _, err := bot.Send(msg); err != nil {
					log.Panic(err)
				}
			} else if userText == "menu" {
				msg.Text = qa.MainMenu
				// log.Println("ok")
				// send message
				if _, err := bot.Send(msg); err != nil {
					log.Panic(err)
				}
			} else if userText == "1" || userText == "nama anggota kelompok" || userText == "anggota kelompok" || userText == "nama anggota" {
				msg.Text = qa.MenuSatu
				// send message
				if _, err := bot.Send(msg); err != nil {
					log.Panic(err)
				}
			} else if userText == "hadist" || userText == "hadis" || userText == "hadits" || userText == "hadts" || userText == "2" || userText == "dua" {
				msg.Text = qa.MenuDua
				// send message
				if _, err := bot.Send(msg); err != nil {
					log.Panic(err)
				}
			} else if userText == "cari hadits" || userText == "temukan" || userText == "temukan hadits" || userText == "temukan hadts" || userText == "3" || userText == "tiga" {
				msg.Text = qa.MenuTiga
				// send message
				if _, err := bot.Send(msg); err != nil {
					log.Panic(err)
				}
			} else if (strings.Contains(strings.ToLower(userText), "hadits") || strings.Contains(strings.ToLower(userText), "hadis")) && (strings.Contains(strings.ToLower(userText), "tentang") || strings.Contains(strings.ToLower(userText), "mengenai")) {
				// log.Println("masuk tentang")
				if strings.Contains(userText, "tentang") {
					splits := strings.Split(userText, "tentang")
					search := splits[1]
					var hadits api.Hadits
					hadits, err = api.Search(search)

					if err != nil {
						// send message
						msg.Text = err.Error()
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
					} else {
						msg.Text = "Berikut ini menampilkan hadist tentang" + search + ": "
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = hadits.Kitab
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = hadits.Arab
						if len(msg.Text) > 4000 {
							msg.Text = msg.Text[:4090]
						}
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = hadits.Terjemah
						if len(msg.Text) > 4000 {
							msg.Text = msg.Text[:4000]
						}
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = qa.Navs
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
					}

				} else {
					splits := strings.Split(userText, "mengenai")
					search := splits[1]
					var hadits api.Hadits
					hadits, err = api.Search(search)

					if err != nil {
						// send message
						msg.Text = err.Error()
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
					} else {
						msg.Text = "Berikut ini menampilkan hadist mengenai" + search + ": "
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = hadits.Kitab
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = hadits.Arab
						if len(msg.Text) > 4000 {
							msg.Text = msg.Text[:4090]
						}
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = hadits.Terjemah
						if len(msg.Text) > 4000 {
							msg.Text = msg.Text[:4000]
						}
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						msg.Text = qa.Navs
						if _, err := bot.Send(msg); err != nil {
							log.Panic(err)
						}
						// if len(msg.Text) > 4000 {
						// 	msg.Text = msg.Text[:4000]
						// }
					}
				}

			} else {
				// log.Println(userText, "ut else ")
				if userText == "" {
					msg.Text = "Mohon maaf, saya belum mengerti apa yang kamu maksud, coba ketik 'hai' atau ketik 'menu' untuk melihat menu utama"

					// send message
					if _, err := bot.Send(msg); err != nil {
						log.Panic(err)
					}
				}

				templates := qa.Template
				for _, val := range templates {
					if len(val.Question) > 1 {
						// loop sample text
						for _, valqa := range val.Question {
							if valqa == userText || strings.Contains(strings.ToLower(userText), strings.ToLower(valqa)) {
								msg.Text = val.Answer
								break
							}
						}
					} else {
						if strings.Contains(strings.ToLower(userText), strings.ToLower(val.Question[0])) || strings.ToLower(val.Question[0]) == strings.ToLower(userText) {
							msg.Text = val.Answer
							break
						}
					}
				}
				if msg.Text == "" {
					msg.Text = "Mohon maaf, saya belum mengerti apa yang kamu maksud, coba ketik 'hai' atau ketik 'menu' untuk melihat menu utama"
				}
				// send message
				if _, err := bot.Send(msg); err != nil {
					log.Panic(err)
				}
			}
			// log.Println(userText, "ut bawah")
		} else {
			msg.Text = "Mohon maaf, saya belum mengerti apa yang kamu maksud, coba ketik 'hai' atau ketik 'menu' untuk melihat menu utama"

			// send message
			if _, err := bot.Send(msg); err != nil {
				log.Panic(err)
			}
		}

		// if _, err := bot.Send(msg); err != nil {
		// 	log.Panic(err)
		// }
	}
}
