import * as Turbo from "@hotwired/turbo";
import Alpine from "alpinejs";

// Initalize Alpinejs
window.Alpine = Alpine;

Alpine.start();

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  if ("serviceWorker" in navigator && navigator.onLine) {
    navigator.serviceWorker.register("/service-worker.js").then(
      (reg) => {
        console.log("Registrasi service worker Berhasil", reg);
      },
      (err) => {
        console.error("Registrasi service worker Gagal", err);
      }
    );
  }
}
