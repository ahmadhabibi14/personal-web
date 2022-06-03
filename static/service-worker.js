const CACHE_NAME = 'serviceWorker';
const toCache = [
  '/',
  '/index.html',
  '/about/index.html',
  '/project/index.html',
  '/contact/index.html',
  '/blog/index.html',
  '/404.html',
  '/css/*',
  '/css/syntax.css',
  '/css/main.min.06205cf7e09b95b02488738717feba19fec08cebf86d1e246eb46a7fc8a789d5.css',
  '/images/avatar.png',
  '/images/*',
  '/icons/*',
  '/webfonts/*',
  '/habiLogo.svg',
  '/js/script.js',
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