---
title: "Dokumentasi offline tailwind css"
date: 2022-05-31T12:13:25+08:00
draft: false
lang: id
---

Tailwindcss adalah framework css yang banyak di pakai oleh para web developer karena fleksibilitas nya. Maka dari itu saya juga tidak mau ketinggalan untuk memakai framework keren ini. Kendalanya saat saya mau ngoding dan internet tidak ada, dan lupa class class dari tailwind, karena tidak membuka dokumentasi nya, dan tentunya itu cukup sulit. Mana ada orang yang mau ngoding tanpa internet 😹. maka dari itu saya mau membagikan tips untuk membaca dokumentasi dari Tailwind css secara offline 🤓.

#### 1. Download file-file web nya

Buka terminal, lalu clone dengan git, atau juga bisa di download manual dari [github](https://github.com/tailwindlabs/tailwindcss.com "github")
```sh
git clone https://github.com/tailwindlabs/tailwindcss.com.git
```
Kemudian masuk ke direktori file yang kita clone tadi
```sh
cd ./tailwindcss.com
```

#### 2. Install

Oh ya, website [tailwindcss.com](https://tailwindcss.com.com/ "tailwind css") ini di buat menggunakan framework JavaScript bernama [Nextjs](https://nextjs.org/ "nextjs"). Jadi, kita perlu menambah paket-paket yang diperlukan untuk menjalankan website nya.

Yang kita butuhkan pertama adalah yarn, sebuah package manager untuk [Node.js](https://nodejs.org/en/docs/ "nodejs"). Jika belum di install silahkan diinstall. Kalau anda tidak memakai linux, silahkan cari sendiri cara menginstall Node.js dan Yarn
```sh
# Untuk Arch
sudo pacman -S yarn

#Untuk Debian
sudo apt install yarn

#Untuk Fedora
sudo dnf install yarn
```
{{< images src="/images/offline-tailwind-docs/01.png" alt="images-01" >}}
Install dependencies yang di butuhkan

```sh
yarn
```
Jika sudah, maka website tailwindcss sudah bisa dijalankan
```sh
yarn dev
```

{{< images src="/images/offline-tailwind-docs/02.png" alt="images-02" >}}

Dan... hasil nya adalah seperti website [tailwindcss.com](https://tailwindcss.com.com/ "tailwind css")

{{< images src="/images/offline-tailwind-docs/03.png" alt="images-03" >}}

#### Akhir Kata...

Salah satu cara terbaik belajar pemrograman adalah dengan membaca dokumentasi nya, maka dari itu mari perbanyak membaca dokumentasi. Selamat mencoba 😉.