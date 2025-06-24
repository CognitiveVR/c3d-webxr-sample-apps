const CACHE_NAME = 'threejs-vr-app-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/main.js',
  '/manifest.json', 
  '/src/cognitive.js',
  '/src/controllers.js',
  '/src/objects.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(err => {
        console.error('Service Worker: Caching failed', err);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.url.includes('/@vite/client') || request.url.includes('/@fs/')) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            if (request.method === 'GET' && networkResponse.status === 200) {
              cache.put(request, responseToCache);
            }
          });
        return networkResponse;
      })
      .catch(() => {
        console.log('Service Worker: Fetching from cache', request.url);
        return caches.match(request);
      })
  );
});