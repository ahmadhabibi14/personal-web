---
title: "Fix: Manjaro xfce Failed to Start Display Manager"
date: 2022-01-11T08:52:14+08:00
draft: false
lang: en
---

When using Linux as an Operating System we might be get any error or any other suck things, especially if we use rolling release distribution which usually "not stable". So that we need to make effort to repair our linux system. Well, this error that I get was make me panic enough 🙀 because of my Linux system couldn't displaying login screen as known as **Display Manager**, and it's stuck on Bootloader. I almost give it up and wants to install another distribution or install manjaro again. Fyi, it happen when I turn on laptop, and bootloader couldn't switch to login screen. So that I open the log system with press **Alt + F2** and it looks like the picture below.

<!-- Saat menggunakan linux pasti ada saja kita menemukan kendala error atau apapun itu, apalagi kalau memakai distro rolling release yang biasa nya "tidak stabil". Maka mau tidak mau pengguna harus melakukan upaya perbaikan kepada system linux nya. Well, error yang saya dapat kan ini cukup membuat saya panik 🙀 karena sistem linux saya tidak bisa menampilkan login screen atau biasa di sebut display manager dan mentok di bootsloader. Saya hampir menyerah dan mau menginstall ulang linux. Kejadiannya saat saya menyalakan laptop, dan bootloader tidak mau beralih ke login screen. Kemudian saya buka log system nya dengan menekan Alt + F2 dan terlihat seperti gambar di bawah. -->

{{< images src="/images/failed-to-start-display-manager/01.jpg" alt="images-01" >}}

After that I press **Alt + F2** again to entering tty2 terminal. Then I tried to connect wifi with these command :

```sh
# Activate networking
$ rfkill unblock wifi

# Seeing interface from Wi-Fi adapter
$ ifconfig

# Connect to the interface
$ sudo ifconfig wlp3s0 up

# See Wi-Fi status
$ iwconfig

# Scan nearby network to connect, with displaying its SSID
$ sudo iwlist wlp3s0 scan | grep ESSID

# Connect to network that we rather to, note that Wi-Fi name that I would to connect is "habi_WiFi"
$ sudo iwconfig wlp3s0 essid habi-WiFi
```

Now, Wi-Fi is already connected, so I'd like to update and upgrade repository/system.

```sh
# Update system
$ sudo pacman -Sy

# Upgrade system
$ sudo pacman -Su
```

Make sure to upgrade the all packages to not get any crash. After that, I checked the Display Manager if it is still failed or not. Fyi, I used Light Display Manager as default Display Manager.

```sh
# Seeing which system that failed to execute
$ sudo systemctl --failed

# Debug
$ lightdm --debug --test-mode
```

The result is, it's still failed 😥. Finally I decided to use KDE Plasma's default Display Manager, named SDDM.

```sh
# Install SDDM display manager
$ sudo pacman -S sddm

# Use it as default display manager
$ sudo systemctl enable --now sddm --force

# Reboot system
$ reboot
```

After restart,SDDM is a default Display Manager, and finally I can get back to my desktop 🥳.

{{< images src="/images/failed-to-start-display-manager/02.png" alt="images-02" >}}

Yuppp, that's how I solve my linux system when it couldn't enter login screen, i wish it was useful and can help other who get the same trouble 😉.