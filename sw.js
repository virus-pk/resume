importScripts('/virus-pk.github.io/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/virus-pk.github.io/_nuxt/2a95d8f150789b64b2ba.js",
    "revision": "a0267a7e02d4dd431f3af24106838fe5"
  },
  {
    "url": "/virus-pk.github.io/_nuxt/3bcf74752b6b2e790511.js",
    "revision": "2b3689df2daa2f847eaf33ff4708281a"
  },
  {
    "url": "/virus-pk.github.io/_nuxt/49d1a14327ed56516fc7.js",
    "revision": "2400ceb6c0d2d2f441dcd699f28e9b3c"
  },
  {
    "url": "/virus-pk.github.io/_nuxt/650f60fba46973b9b9a0.js",
    "revision": "42b8195037dba3b5b8b733e1227e3336"
  },
  {
    "url": "/virus-pk.github.io/_nuxt/fafccef5e38dbe276646.js",
    "revision": "7b27520230d991f4ff964c17a1882382"
  }
], {
  "cacheId": "virus-pk.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/virus-pk.github.io/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/virus-pk.github.io/.*'), workbox.strategies.networkFirst({}), 'GET')
