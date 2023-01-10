---
title: "Konfigurasi Custom Domain GitHub Page dengan Cloudflare"
date: 2022-02-11T11:51:10+08:00
draft: false
lang: id
---

Halaman Github (Github Pages) merupakan layanan hosting web statis yang diberikan oleh Github. Layanan ini diberikan secara gratis dan kita juga akan mendapatkan subdomain **.github.io**. Lalu bagaimana dengan yang kustom domain atau domain sendiri?. Untuk mendapatkan SSL, kita dapat menggunakan layanan SSL gratis dari Cloudflare. Sebelum mengkonfigurasi nya, siapkan hal – hal berikut :

- **PC atau Laptop**
- **Sambungan Internet**
- **Github pages**
- **Domain** [ Pastikan anda sudah mempunyai domain, silahkan beli dulu ]
- **Kopi, dan Snack** [ Biar semangat, sediakan kopi dan makanan ringan ]

### **Konfigurasi custom domain ke Github page**

1.	**Tambahkan domain ke github page** \
	Masuk ke **Settings** > **Pages**, kemudian isi domain anda.
	{{< images src="/images/konfigurasi-custom-domain-github-page/01.png" alt="images-01" >}}
2.	**Copy TXT record ke DNS management** \
	Copy hostname dan TXT value ke DNS management tempat anda membeli domain
	{{< images src="/images/konfigurasi-custom-domain-github-page/02.png" alt="images-02" >}}
	{{< images src="/images/konfigurasi-custom-domain-github-page/03.png" alt="images-03" >}}
3.	**Pada DNS management, atur seperti berikut** \
	{{< images src="/images/konfigurasi-custom-domain-github-page/04.png" alt="images-04" >}}
	{{< images src="/images/konfigurasi-custom-domain-github-page/05.png" alt="images-05" >}}
4.	**Tambahkan domain ke repositori github** \
	Masuk ke repositori github page, kemudian klik **Settings** > **Pages**, dan isi dengan domain anda.
	{{< images src="/images/konfigurasi-custom-domain-github-page/06.png" alt="images-06" >}}
	Kalau sudah, buat file bernama **CNAME** pada repositori github page nya, kemudian isi sesuai nama domain anda. Tapi kalau otomatis ada, jangan di buat.
	{{< images src="/images/konfigurasi-custom-domain-github-page/07.png" alt="images-07" >}}

Yapppp !!!! Sekarang website nya sudah jadi. Tapi masih ada yang kurang, yaitu SSL nya. SSL adalah singkatan dari Secure Socket Layer, salah satu komponen penting yang harus dimiliki website. Dengan SSL, transfer data di dalam website menjadi lebih aman dan terenkripsi. Bahkan saking pentingnya, Google Chrome melabeli website tanpa sertifikat SSL sebagai **"Not Secure"**.
{{< images src="/images/konfigurasi-custom-domain-github-page/no_SSL.png" alt="No SSL" >}}

### **Mendaftarkan website ke Cloudflare**
Cloudflare merupakan layanan untuk CDN, DNS Management, Cache, SSL, Proxy Server, dll. Saya menggunakan Cloudflare sebagai layanan SSL dan Reverse Proxy.

Buka [cloudflare.com](https://www.cloudflare.com "Cloudflare") kemudian konfigurasikan seperti berikut.
1.	**Tambahkan website ke cloudflare** \
	{{< images src="/images/konfigurasi-custom-domain-github-page/08.png" alt="images-08" >}}
2.	**Ganti name server website ke cloudflare** \
	Pada menu DNS, copy Cloudflare Nameserver kemudian tempel ke name server pada DNS management tempat anda membeli domain
	{{< images src="/images/konfigurasi-custom-domain-github-page/09.png" alt="images-09" >}}
3.	**Konfigurasi DNS Record** \
	{{< images src="/images/konfigurasi-custom-domain-github-page/10.png" alt="images-10" >}}
4.	**Atur SSL/TLS ke mode Full** \
	{{< images src="/images/konfigurasi-custom-domain-github-page/11.png" alt="images-11" >}}
5.	**Tambahkan Page Rule** \
	{{< images src="/images/konfigurasi-custom-domain-github-page/12.png" alt="images-12" >}}

Setelah itu, tunggu proses propagansi DNS nya, akan membutuhkan waktu kira-kira 24-48 jam.
Nah, untuk hasil nya website pun sudah mendapat SSL, seperti gambar berikut.
{{< images src="/images/konfigurasi-custom-domain-github-page/SSL.png" alt="SSL" >}}

Mari kita cek domain apakah sudah terdaftar di database **WHOIS**.
```bash
$ whois habibi2004.tech
```
{{< images src="/images/konfigurasi-custom-domain-github-page/whois-hbbiiiii.png" alt="WHOIS" >}}

Jadi, untuk membuat Github Page terlihat keren, kita membutuhkan custom domain dan cloudflare sebagai CDN nya. Baiklah, sekian tutorial singkat dari saya, kurang lebih nya mohon maaf. 😁😉