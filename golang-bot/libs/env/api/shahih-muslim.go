package api

import (
	"encoding/json"
	"errors"
	"io"
	"log"
	"net/http"
	"strings"
)

var Url string = "https://hadist-app-backend.herokuapp.com/api/hadist/shahih-muslim?search="

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

func Search(keyword string) (Hadits, error) {
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
		return data.Data[0], nil
	} else {
		return data.Data[0], errors.New("Mohon maaf hadits yang kamu cari tidak ditemukan")
	}
}
