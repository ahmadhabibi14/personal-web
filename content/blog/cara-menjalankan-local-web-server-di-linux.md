---
title: "Cara Menjalankan Local Web Server Di Linux"
date: 2022-03-17T19:07:04+08:00
draft: false
lang: id
type: article
keywords: Linux, JavaScript, Go, Blog, Tech, CSS, HTML

image: /cover/default.png
description: "A personal web and blog site of Ahmad Habibi"
---

Ketika membuat atau mendesain web, kita bisa saja membuka file HTML nya langsung ke browser. Cukup mudah tinggal drag file html nya ke browser atau klik kanan lalu buka dengan browser. Membuka file html langsung ke browser alamatnya akan diawali dengan **file://** diikuti dengan path file di PC/Laptop anda.

{{< images src="/images/cara-membuat-local-web-server-di-linux/image-1.png" alt="images-1" >}}

Cara ini tidak lah buruk, tetapi seiring progress belajar web development kita pasti membutuhkan local web server, seperti jika ada script JS untuk merequest data dari website lain tidak akan bisa karena kita perlu mengakses halaman web tersebut dengan protokol **http://**. Disitu lah kita perlu yang namanya web server 🌐. Tugasnya web server adalah men-serve halaman web dan file-file pendukungnya dengan protokol standar http. Oke, itu lah penjelasan singkat tentang web server dari saya, sekarang kita langsung ke cara menginstallnya. 😎

### **Install PHP**

Pastikan PHP telah terinstall di PC/Laptop anda. Jika belum, install dulu 😅.
```bash
sudo pacman -Sy
sudo pacman -Su
sudo pacman -S php
```
{{< images src="/images/cara-membuat-local-web-server-di-linux/image-2.png" alt="images-2" >}}

### **Buat Local Web Server**

Buat server dan pastikan untuk membuatnya di dalam folder tempat anda menyimpan file - file website nya.
```bash
php -S localhost:8000
```
Perhatikan argumen -S, argumen tersebut menggunakan huruf kapital. Kemudian argumen kedua adalah alamat server dan nomor port yang akan digunakan. Nomor port bebas, asalkan tidak bentrok dengan nomer port service lain. Kali ini saya menggunakan port 8000.
{{< images src="/images/cara-membuat-local-web-server-di-linux/image-3.png" alt="images-3" >}}

###	**Jalankan Local Web Server di Browser**

Copy URL yang ada di terminal tempat kita membuat local web server, kemudian paste di address bar browser.
{{< images src="/images/cara-membuat-local-web-server-di-linux/image-4.png" alt="images-4" >}}

Oke, sekian tutorial singkat, padat, dan jelas dari saya... Kurang lebih nya mohon maaf dan terima kasih 😉