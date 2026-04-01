const CACHE_NAME = 'verze-1.5'; // Změna verze vynutí aktualizaci
const ASSETS = [
  'index.html',
  'style.css',
  'script.js',
  'ukolovnik.html',
  'ukolovnik.css',
  'zabava.html',
  'zabava.css'
];

// 1. INSTALACE
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Instaluji novou verzi cache');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 2. AKTIVACE
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});

// 3. FETCH (Strategie: Síť má přednost, jinak Cache)
self.addEventListener('fetch', (event) => {
  // Ignorujeme požadavky na API (počasí), ty nechceme cachovat
  if (event.request.url.includes('://open-meteo.com') || event.request.url.includes('bigdatacloud')) {
    return; 
  }

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

