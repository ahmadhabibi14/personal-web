---
title: "Mencoba Font Awesome versi 6"
date: 2022-02-28T17:56:09+08:00
draft: false
---

Font Awesome adalah kumpulan font dan ikon yang berbasis pada CSS dan Less. Font awesome bisa juga dikatakan sebagai framework CSS tetapi khusus untuk ikon.

* [Font Awesome](https://fontawesome.com "Font Awesome")

Saat artikel ini ditulis saya baru saja migrasi ke font awesome versi 6, sebagai plugin ikon untuk website ini. Dari keterangan di website resminya, Font awesome 6 rilis pada bulan februari 2022 📅
{{< images src="/images/mencoba-font-awesome-v6.0.0/01.png" alt="images" >}}

### **Apa yang baru dari font awesome versi 6 ?**

1. **Lebih Banyak Ikon**

	Font Awesome 6 menambah 7051 ikon baru. Selain itu, sebagian besar ikon telah di desain ulang, artinya di versi 6 ini ikon sudah lebih bagus.

2. **Lebih banyak Icon Style**

	Di versi 6 ini ada tambahan ikon baru yaitu **Thin**, sama dengan **Light** style tapi lebih tipis.

3. **Lebih banyak cara untuk dipakai**

	Font Awesome 6 terdapat lebih banyak plugin paket - paket yang sesuai dengan kebutuhan kita. Seperti plugin untuk wordpress, dan masih banyak lagi. Jadi, ini dapat membuat browser merendernya lebih cepat.

Untuk menggunakan font awesome juga cukup mudah, bisa menggunakan CDN atau bisa di download. Saya biasanya menggunakan CDN supaya lebih mudah 😎, caranya hanya dengan menambah kode html berikut ke dalam tag **meta** di file html website :
```html
<script src="https://kit.fontawesome.com/25c9b1cfe6.js" crossorigin="anonymous"></script>
```
Untuk mendapatkan link ini, kita harus membuat akun **Font Awesome** dulu 😄.

Kalau sudah, font awesome siap kita pakai. Caranya pun cukup mudah, contoh saya mau menampilkan ikon bola basket. Tinggal cari ikon Basket dan salin kode html nya ...
{{< images src="/images/mencoba-font-awesome-v6.0.0/02.png" alt="images-2" >}}
```html
<i class="fa-solid fa-basketball"></i>
```
**Hasilnya** : {{< awesome fa-solid fa-basketball >}}

Jadi, font awesome cukup berguna untuk menambah icon untuk website kita. Dapat mempermudah kita tanpa menambah ikon secara manual karena font awesome menyediakan banyak sekali ikon gratis maupun berbayar.

### **Penutup ....**
Website membutuhkan ikon untuk mempermudah kita mengetahui setiap fungsi dari hal - hal yang ada pada website, dan bisa juga untuk mempercantik tampilannya saja. Maka dari itu tidak ada salahnya mencoba Font Awesome sebagai plugin ikonnya