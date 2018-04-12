'use strict';

let precacheConfig = [['/index.html', 'ac8b02b69fc63b71654a6a42d02b6abc'], ['/static/css/main.7b60833e.css', '374ab8a4051b5d5117abac69aa7e0783'], ['/static/js/main.c1ddfec4.js', '6ca657df19b06cec7a37ca96dc037fd0'], ['/static/media/bg.dadd3141.svg', 'dadd3141dbca122d214d94b34fd71313'], ['/static/media/iphone.4cb8633b.svg', '4cb8633b034da871855545f49e14978a'], ['/static/media/logo.c5cdded5.svg', 'c5cdded553e0dda4ddbeb0b6c335bd3e']],
  cacheName = `sw-precache-v3-sw-precache-webpack-plugin-${self.registration ? self.registration.scope : ''}`,
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) { const n = new URL(e); return n.pathname.slice(-1) === '/' && (n.pathname += t), n.toString(); },
  cleanResponse = function (t) { return t.redirected ? ('body' in t ? Promise.resolve(t.body) : t.blob()).then(e => new Response(e, { headers: t.headers, status: t.status, statusText: t.statusText })) : Promise.resolve(t); },
  createCacheKey = function (e, t, n, r) { const a = new URL(e); return r && a.pathname.match(r) || (a.search += `${(a.search ? '&' : '') + encodeURIComponent(t)}=${encodeURIComponent(n)}`), a.toString(); },
  isPathWhitelisted = function (e, t) { if (e.length === 0) return !0; const n = new URL(t).pathname; return e.some(e => n.match(e)); },
  stripIgnoredUrlParameters = function (e, n) {
    const t = new URL(e); return t.hash = '', t.search = t.search.slice(1).split('&').map(e => e.split('=')).filter(t => n.every(e => !e.test(t[0])))
      .map(e => e.join('='))
      .join('&'), t.toString();
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(precacheConfig.map((e) => {
    let t = e[0],
      n = e[1],
      r = new URL(t, self.location),
      a = createCacheKey(r, hashParamName, n, /\.\w{8}\./); return [r.toString(), a];
  })); function setOfCachedUrls(e) { return e.keys().then(e => e.map(e => e.url)).then(e => new Set(e)); }self.addEventListener('install', (e) => { e.waitUntil(caches.open(cacheName).then(r => setOfCachedUrls(r).then(n => Promise.all(Array.from(urlsToCacheKeys.values()).map((t) => { if (!n.has(t)) { const e = new Request(t, { credentials: 'same-origin' }); return fetch(e).then((e) => { if (!e.ok) throw new Error(`Request for ${t } returned a response with status ${e.status}`); return cleanResponse(e).then(e => r.put(t, e)); }); } })))).then(() => self.skipWaiting())); }), self.addEventListener('activate', (e) => { const n = new Set(urlsToCacheKeys.values()); e.waitUntil(caches.open(cacheName).then(t => t.keys().then(e => Promise.all(e.map((e) => { if (!n.has(e.url)) return t.delete(e); })))).then(() => self.clients.claim())); }), self.addEventListener('fetch', (t) => {
  if (t.request.method === 'GET') {
    let e,
      n = stripIgnoredUrlParameters(t.request.url, ignoreUrlParametersMatching),
      r = 'index.html'; (e = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, r), e = urlsToCacheKeys.has(n)); const a = '/index.html'; !e && t.request.mode === 'navigate' && isPathWhitelisted(['^(?!\\/__).*'], t.request.url) && (n = new URL(a, self.location).toString(), e = urlsToCacheKeys.has(n)), e && t.respondWith(caches.open(cacheName).then(e => e.match(urlsToCacheKeys.get(n)).then((e) => { if (e) return e; throw Error('The cached response that was expected is missing.'); })).catch(e => console.warn('Couldn\'t serve response for "%s" from cache: %O', t.request.url, e), fetch(t.request)));
  }
});
