self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/globals.css',
          '/images/logo1.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  