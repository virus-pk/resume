importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2a95d8f150789b64b2ba.js",
    "revision": "a0267a7e02d4dd431f3af24106838fe5"
  },
  {
    "url": "/_nuxt/650f60fba46973b9b9a0.js",
    "revision": "42b8195037dba3b5b8b733e1227e3336"
  },
  {
    "url": "/_nuxt/84c2a0b837c74e73e211.js",
    "revision": "ae34bb9e257f6d3fcb2a089dbd2e9924"
  },
  {
    "url": "/_nuxt/ec1145ce73d1f993de86.js",
    "revision": "8250acb83f0dd5cdc84561d97db9f94a"
  },
  {
    "url": "/_nuxt/fafccef5e38dbe276646.js",
    "revision": "7b27520230d991f4ff964c17a1882382"
  }
], {
  "cacheId": "virus-pk.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
