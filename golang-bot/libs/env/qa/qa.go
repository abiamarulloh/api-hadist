package qa

var Template []Qa = []Qa{
	{
		Question: []string{"hai", "hi", "hello", "halo", "hallo", "pagi", "siang", "sore", "malam"},
		Answer:   "Hai :) \n\nSilakan ketik 'hadist' untuk melihat daftar hadist",
	},
	{
		Question: []string{"bukhori", "buhori", "bukori", "bukhari", "bukari", "hadis bukhori"},
		Answer:   "Kamu bisa memasukkan topik hadist yang akan di cari",
	},
	{
		Question: []string{"hadist", "hadis", "hadits", "hadst", "hatsi"},
		Answer:   "Hadist yang bisa kamu cari: Hadist Sahih Bukhori, Hadist Sahih Muslim, Hadis Sahih Tirmidzi",
	},
	{
		Question: []string{"help", "bantu", "bantuan"},
		Answer:   "Kamu bisa ketik 'hadist' untuk melihat daftar hadist",
	},
}
