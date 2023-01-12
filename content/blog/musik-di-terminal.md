---
title: "Putar Musik di Terminal Linux"
date: 2022-07-02T09:05:57+08:00
draft: false
lang: id
type: article
keywords: Linux, JavaScript, Go, Blog, Tech, CSS, HTML

image: /cover/default.png
description: "A personal web and blog site of Ahmad Habibi"
---

{{< images src="/images/musik-di-terminal/01.png" alt="images" >}}

Memutar musik di terminal menggunakan aplikasi NCMPCPP dan visualizer CAVA. Kebanyakan linux user emang suka menggunakan terminal, contoh nya saya 😂, biar lebih keren juga sih.

Cara nya juga lumayan ribet karena ada sedikit konfigurasi untuk menjalankannya. Mari kita coba menginstall nya 🙃😎.

Pertama install ncmpcpp, mpc, mpd, cava
```sh
# Arch Linux :
sudo pacman -S ncmpcpp mpc mpd cava
```
Kemudian kita buat folder untuk menyimpan file konfigurasi mpd
```sh
mkdir ~/.mpd
cd .mpd
touch mpd.log pid state sticker.sql database
```
Masih di folder ~/.mpd, kemudian buat konfigurasi file mpd.conf dengan perintah berikut
```sh
touch mpd.conf
```
Lalu isi dengan konfigurasi di bawah ini
```bash
bind_to_address   "localhost"
port              "6600"
music_directory   "/home/habibi/Music"
playlist_directory "/home/habibi/Music"
db_file           "~/.mpd/database"
log_file          "~/.mpd/mpd.log"
pid_file          "~/.mpd/pid"
state_file        "~/.mpd/state"
sticker_file      "~/.sticker.sql"
 log_level        "default"
 auto_update      "yes"
 auto_update_depth  "3"
 input {
         plugin "curl"
 }
 
audio_output {
     type         "pulse"
     name         "Pulse Audio"
}

audio_output {
     type                    "fifo"
     name                    "my_fifo"
     path                    "/tmp/mpd.fifo"
     format                  "44100:16:2"
}
```
Selanjutnya kita harus membuat file konfigurasi ncmpcpp yang akan kita simpan di dalam direktori ~/.ncmpcpp
```sh
mkdir ~/.ncmpcpp
touch ~/.ncmpcpp/config
```
Lalu masukkan script konfigurasi di bawah ini ke dalam file config
```sh
mpd_host = "localhost"
mpd_port = "6600"
mpd_music_dir = "/home/habibi/Music"
visualizer_fifo_path = "/tmp/mpd.fifo"
visualizer_output_name = "my_fifo"
visualizer_sync_interval = "30" 
visualizer_in_stereo = "yes"
progressbar_look = "━━╸"

#Hilangkan tanda pagar pada jenis visualizer yang kamu inginkan. 
#visualizer_type = "wave"
#visualizer_type = "wave_filled"
#visualizer_type = "ellipse"
visualizer_type = "spectrum"

#Hilangkan tanda pagar pada tampilan visualizer yang kamu inginkan.
#visualizer_look = "+|"
visualizer_look = "●●"
#visualizer_look = "∙▋"
```
Simpan file konfigurasi dan close kalau sudah selesai.
Note: untuk direktori "/home/habibi/Music" isi dengan direktori tempat anda menyimpan musik.

\
Supaya lebih bagus, buat konfigurasi warna bar dari cava
```sh
mkdir ~/.config/cava
touch ~/.config/cava/config
```
Kemudian isi file config dengan script berikut
```sh
[color]

gradient = 1

gradient_color_1 = '#B5E8E0'
gradient_color_2 = '#89DCEB'
gradient_color_3 = '#96CDFB'
gradient_color_4 = '#DDB6F2'
gradient_color_5 = '#F5C2E7'
gradient_color_6 = '#E8A2AF'
gradient_color_7 = '#F2CDCD'
gradient_color_8 = '#F5E0DC'
```

Nah, sekarang kita sudah bisa menjalankan ncmpcpp dan cava di terminal linux untuk memutar musik, silahkan ketikkan perintah di bawah satu persatu :
```sh
killall mpd
mpd
ncmpcpp
```
```sh
cava
```

Untuk menjalankan music player ncmpcpp kita bisa memanfaatkan shortcut pada keyboard yang tersedia sebagai berikut:

* 1 ~ Untuk menampilkan playlist saat ini
* 2 ~ Untuk browse file musik
* 3 ~ Search engine untuk mencari lagu berdasarkan kategori
* 4 ~ Untuk menampilkan media library
* 5 ~ Playlist editor
* 6 ~ Menampilkan tag editor
* 7 ~ Memilih jenis audio output
* 8 ~ Menampilkan music visualizer
* = ~ Menampilkan jam
* i ~ Menampilkan info detail lagu
* S ~ Stop lagu
* Q ~ Keluar dari aplikasi
* B ~ Backwars
* F ~ Forward
* P ~ Pause
* R ~ Repeat mode
* A ~ Tambah ke playlist
* Z ~ Random mode
* X ~ Crossfade on

Itulah tutorial memutar musik lewat terminal linux 🤠. Lebih keren tentunya karena menggunakan terminal atau CLI (Command Line Interface), tidak semudah menggunakan GUI seperti VLC 😂. Tapi ini membutuhkan konfigurasi yang sedikit ribet 😵🤯. Semoga bermanfaat 🙃😉.