const CACHE_NAME = 'tetrad-konspekt-v2.0.2';
const CORE_ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.svg', './icon-512.svg'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(CORE_ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then((c) => c || fetch(e.request).then((r) => { if (r && r.status === 200) { const cl = r.clone(); caches.open(CACHE_NAME).then((ca) => ca.put(e.request, cl)); } return r; }).catch(() => c)));
});
