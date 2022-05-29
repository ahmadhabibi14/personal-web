---
title: "Membuat Efek Blur Pada Website"
date: 2022-01-01
draft: false
---

Efek blur pada navigasi bar akan membuat tampilan menjadi lebih keren dan meningkatkan UI website. Untuk membuatnya juga cukup mudah, kali ini saya memakai Bootstrap dan Font Awesome sebagai framework CSS nya.

##### **1. Tulis Kode HTML nya :**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Navbar efek blur</title>
  <!-- link cdn bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- Link cdn Bootstrap JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <!-- link cdn Font Awesome CSS -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
  <!-- Kode CSS kita -->
  <link href="style.css" rel="stylesheet">
</head>
<body>
  <!-- Navigasi Bar -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark shadow" style="border-top: 6px solid #0D6EFD;">
    <div class="container-lg">
      <a class="navbar-brand" href="#"><span class="fw-bold text-dark">HBII<span class="text-primary">III</span>></span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fas fa-bars text-primary"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto list text-center">
          <li class="nav-item link">
            <a class="nav-link text-dark fw-bold fs-6 ngab" href="#home"><i class="fas fa-home"></i> Home</a>
          </li>
          <li class="nav-item link">
            <a class="nav-link text-dark fs-6" href="#about"><i class="far fa-user"></i> About</a>
          </li>
          <li class="nav-item link">
            <a class="nav-link text-dark fs-6" href="#contact"><i class="fas fa-envelope-open-text"></i> Contact</a>
          </li>
          <li class="nav-item link">
            <a class="nav-link text-dark fs-6" href="#blog"><i class="far fa-edit"></i> Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Akhir Navigasi Bar -->
</body>
</html>
```
##### **2. Kode CSS :**

```css
nav {
  background: rgba(245, 245, 245, 0.7);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

body {
  background: url('./gambar.jpg') no-repeat scroll;
  background-size: 100% 100%;
  min-height: 700px;
}

.link {
  position: relative;
  padding-bottom: 3px;
  cursor: pointer;
}

.link::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 0%;
  height: 5px;
  border-radius: 5px;
  background-color: #0d6efd;
  transition: width 0.3s ease-out;
}

.link:hover.link::after {
  width: 100%;
}

.navbar-nav > li{
  margin-left:10px;
  margin-right:10px;
}
```
#### 3. Hasil:

{{< images src="/images/membuat-efek-blur-pada-website/images.png" alt="images" >}}