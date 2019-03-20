importScripts('/resume/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/resume/_nuxt/2a95d8f150789b64b2ba.js",
    "revision": "a0267a7e02d4dd431f3af24106838fe5"
  },
  {
    "url": "/resume/_nuxt/650f60fba46973b9b9a0.js",
    "revision": "42b8195037dba3b5b8b733e1227e3336"
  },
  {
    "url": "/resume/_nuxt/9d979365c9159a537ee1.js",
    "revision": "396aeeddcf8d789a7ae87386667a2561"
  },
  {
    "url": "/resume/_nuxt/af5be39ea628ea0b00ec.js",
    "revision": "c699cd04184f84cce1c89219c58bea8f"
  },
  {
    "url": "/resume/_nuxt/fafccef5e38dbe276646.js",
    "revision": "7b27520230d991f4ff964c17a1882382"
  }
], {
  "cacheId": "virus-pk.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/resume/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/resume/.*'), workbox.strategies.networkFirst({}), 'GET')
