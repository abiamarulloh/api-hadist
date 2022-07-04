package qa

var MainMenu string = "Silakan Pilih menu dibawah ini: \n\n1. Nama Anggota Kelompok \n2. Daftar Hadits\n3. Cari Hadits \n\nSilakan pilih dengan mengetikkan menu berikut"
var MenuSatu string = "Berikut Anggota Kelompok 2:\n\n1. Abi Amarulloh - 2010081\n2. Nurmuhamad - 2010014\n3. Sahal Mahfudh - 2010015\n4. Muhammad Rasyid Siddiq - 2010063\n5. Vonny  Febriyanti - 2010082 \n\nTerima kasih :)"
var MenuDua string = "Berikut Daftar Hadits yang ada di Aplikasi kami \n\n1. Hadits Shahih Bukhari \n2. Hadits Shahih Muslim \n3. Hadits Sunan Tirmidzi \n\nSilakan Memilih Hadits dengan cara mengetikkan nama hadits"
var MenuTiga string = "Untuk Cari Hadits Silakan ketik 'hadits tentang (spasi) topik' misal 'hadits tentang zakat'"
var Template []Qa = []Qa{
	{
		Question: []string{"bukhori", "buhori", "bukori", "bukhari", "bukari", "hadis bukhori"},
		Answer:   "Silakan memasukkan topik Hadits Shahih Bukhori yang akan di cari",
	},
	{
		Question: []string{"muslim", "moslem", "muslimm", "sahih muslim", "muslimin"},
		Answer:   "Silakan memasukkan topik Hadits Shahih Muslim yang akan di cari",
	},
	{
		Question: []string{"tirmidzi", "trmidzi", "tirmidz", "tirmizi", "tirmisi", "tirmizzi"},
		Answer:   "Silakan memasukkan topik Hadits Sunan Tirmidzi yang akan di cari",
	},
	{
		Question: []string{"cari", "temukan", "mencari", "temu", "tiga", "3"},
		Answer:   MenuDua,
	},
	{
		Question: []string{"hadist", "hadis", "hadits", "hadst", "hatsi", "haidst", "haidts", "2", "dua"},
		Answer:   MenuDua,
	},
	{
		Question: []string{"kelompok", "anggota", "nama anggota", "kelopok", "kelompk", "klompok", "anggta", "1", "satu"},
		Answer:   MenuSatu,
	},
	{
		Question: []string{"help", "bantu", "bantuan"},
		Answer:   "Silakan ketik menu untuk kembali ke menu utama, atau ketik 'batal' untuk membatalkan",
	},
	{
		Question: []string{"batal", "cancel", "btal"},
		Answer:   "Terima kasih sampai jumpa kembali :)",
	},
	{
		Question: []string{"menu", "mennu", "main menu"},
		Answer:   MainMenu,
	},
	{
		Question: []string{"hai", "hi", "hello", "halo", "hallo", "pagi", "siang", "sore", "malam"},
		Answer:   "Hai :)" + "\n\n" + MainMenu,
	},
}
