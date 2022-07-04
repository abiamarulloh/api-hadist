package api

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"strings"
)

var Url string = "http://hadist-app-backend.herokuapp.com/hadist/shahih-muslim?search="

type ResponseApi struct {
	Data []Hadits    `json:"data"`
	Meta interface{} `json:"meta"`
}

type Hadits struct {
	ID       uint   `json:"id"`
	Kitab    string `json:"kitab"`
	Arab     string `json:"arab"`
	Terjemah string `json:"terjemah"`
}

func Search(keyword string) string {
	var url = Url + strings.Trim(keyword, " ")
	log.Println(keyword, url)
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)

	var data ResponseApi

	json.Unmarshal(body, &data)

	log.Println("res: ", resp)
	// log.Println("body: ", body)
	log.Println("data: ")

	if len(data.Data) > 0 {
		return data.Data[0].Kitab + "\n\n" + data.Data[0].Arab + "\n\n" + data.Data[0].Terjemah
	} else {
		return "Mohon maaf hadits yang kamu cari tidak ditemukan"
	}
}
