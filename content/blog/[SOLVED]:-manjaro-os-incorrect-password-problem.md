---
title: "[SOLVED]: Manjaro OS Incorrect Password Problem"
date: 2022-01-08
draft: false
---

{{< images src="/images/[SOLVED]:-manjaro-os-incorrect-password-problem/01.jpg" alt="image-01" >}}

When I was access root mode or just types $ sudo pacman ..., the system is always showing incorrect password even though I wrote the password correctly. I don't know what causes it is, but probably caused by a bug. Then I figure out and found the solution with typing
```bash
faillock --user habibi --reset
```
(habibi is my username, you should use your username). But after few days I got the same trouble again, but this time can't solved with the same way. After that I'm googling and googling to find out the solution.

{{< images src="/images/[SOLVED]:-manjaro-os-incorrect-password-problem/02.png" alt="image-02" >}}

So I found the solution easily, I just run Mugshot, close it and didn't change anything. I don't know why this is so easy. Now I can finally type $ sudo ... without the trouble anymore.

{{< images src="/images/[SOLVED]:-manjaro-os-incorrect-password-problem/03.jpg" alt="image-03" >}}