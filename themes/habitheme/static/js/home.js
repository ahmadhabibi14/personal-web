class LoadingAnimation{
  constructor(targetEl) {
    this.targetEl = targetEl;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "#", "%", "$", "@", "!", "?", "}", ">", "<", "{", "[", "]"];
    this.letter_count = 0;
    this.word = this.targetEl.innerText.trim().toUpperCase();
    this.finished = false;
  }
  run () {
    this.targetEl.style.display = "none";
    if (!document.querySelector("#title-container")) {
      let div = document.createElement("div");
      div.classList.add("title-container");
      div.classList.add("data-nosnippet");
      div.classList.add("main-title-text");
      div.id = "title-container";
      this.targetEl.parentNode.insertBefore(div, this.targetEl.nextSibling);
      for (let i = 0; i < this.word.length; i++) {
        div.innerHTML += "<span class='display-1 loading-animation'>" + this.word.charAt(i) + "</span>";
      }
    }
    setTimeout(() => {this.write()}, 75);
    setTimeout(() => {this.inc()}, 1000);
  }
  write() {
    try {
      for (let i = this.letter_count; i < this.word.length; i++) {
        if (this.word[i] === " ") continue;
        let c = Math.floor(Math.random() * 36);
        document.querySelectorAll(".loading-animation")[i].innerText = this.alphabet[c];
      }
      if (!this.finished) {
        setTimeout(() => {this.write()}, 75);
      } 
    } catch (err) {
      // Page transition before loading animation is complete
    }
  }
  inc() {
    try {
      document.querySelectorAll(".loading-animation")[this.letter_count].innerText = this.word[this.letter_count];
      document.querySelectorAll(".loading-animation")[this.letter_count].classList.add("glow");
      this.letter_count++;
      if (this.letter_count >= this.word.length) {
        this.finished = true;
      } else {
        setTimeout(() => {this.inc()}, 500);
      }
    } catch (err) {
      // Page transition before loading animation is complete
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let loadingAnimation = new LoadingAnimation(document.getElementById("title"));
  loadingAnimation.run();
})