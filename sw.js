const CACHE_NAME = 'verze-2.1';
// Seznam souborů, které chceš mít dostupné offline
const ASSETS = [
  'index.html',
  'style.css',
  'script.js',
  'ukolovnik.html',
  'ukolovnik.css',
  'zabava.html',
  'zabava.css',
  'pocasi.html',
  'pocasi.css',
  'pocasi.js',
  'zpravy.html',
  'zpravy.css',
  'zpravy.js',
  'televize.html',
  'televize.css',
  'radio.html',
  'radio.css',
  'radio.js',
  /* 'ikona.png' */ // Přidej další soubory, které používáš
];

// 1. INSTALACE - Uložíme soubory do cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Cachování souborů');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 2. AKTIVACE - Smažeme staré verze cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// 3. FETCH - Oprava chyby "Failed to convert value to Response"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Pokud síť selže, zkusíme najít soubor v cache
      return caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        // Pokud soubor není ani v cache, musíme vrátit chybu nebo náhradní stránku
        return new Response('Network error and no cache available', {
          status: 404,
          statusText: 'Not Found'
        });
      });
    })
  );
});