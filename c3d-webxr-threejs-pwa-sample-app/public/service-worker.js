
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST || []);

const CACHE_NAME = 'threejs-vr-app-v1'; 

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