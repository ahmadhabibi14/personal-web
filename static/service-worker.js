const CACHE_NAME = 'SW-001';
const toCache = [
  '/',
  '/index.html',
  '/css/tailwind.css',
  '/css/all.min.css',
  '/css/fontawesome.min.css',
  '/css/syntax.css',
  '/js/script.js',
  '/js/dark-mode.js',
  '/moon.svg',
  '/sun.svg',
  '/h-logo.svg',
  '/Habibi.png',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-v4compatibility.woff2'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(toCache)
      })
      .then(self.skipWaiting())
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match(event.request)
        })
    })
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Hapus cache lama', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
})