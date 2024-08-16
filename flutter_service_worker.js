'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a0715ebad3cd4b344bdb4d35ecd28152",
"assets/AssetManifest.bin.json": "4370a324422620e5c96ac3722b84636a",
"assets/AssetManifest.json": "85e29377db2c20e231cef480e97e77cd",
"assets/assets/63966.png": "74e4b8d9e6e0b8911198d4d56d9f0118",
"assets/assets/aditya.png": "a14e239a033c1fc7e4bcfb2ad8574291",
"assets/assets/android.png": "d9840e8dfe971155362baa1e59f3fa5f",
"assets/assets/apple.png": "af6b8451b3b076fd00e939e019d78507",
"assets/assets/apple_appstore_logo_icon_168587.png": "fc2a334556640916d39171a96698d4d2",
"assets/assets/beard.png": "c14b20572c917230ad0e39fee93be78a",
"assets/assets/bg.jpg": "ab864b919103d60f1bbc1ed1af21cfa3",
"assets/assets/certificate.jpg": "9407a84cfc1ef079937220dfc5d8bb59",
"assets/assets/chrome.png": "2838294eb91a8dd0f8799519addeaf49",
"assets/assets/community.jpg": "3cec02a313f4c6785d25dcd73d7c62ff",
"assets/assets/download.jpeg": "2ceb6dcc7baf2fbdcc32f076185e1ffd",
"assets/assets/Firebase_Logo.png": "e642c7556d83be574ae3929c34ead074",
"assets/assets/girl1.png": "3ee463dfc74ced3cfe68bef163acf957",
"assets/assets/girl2.png": "4ed5d0d68680f97fb3724ac399f76bff",
"assets/assets/image1.png": "6eb5be572ddd504eec87c83b67aae506",
"assets/assets/image2.png": "9e1e6058d3775ea3210378f8dd87238b",
"assets/assets/image3.png": "e0e5b4ae3cea801247ca3543221b9b2c",
"assets/assets/image4.png": "fff6301a8d50eedba8f4ac39d3348362",
"assets/assets/image5.png": "5a3c41f214d658c3da72cf0c263dcf03",
"assets/assets/image6.png": "ffe96eaab5f47f05943f8d38b916fb1c",
"assets/assets/image7.png": "03322784fa8f59ef2a09d9025ce577bb",
"assets/assets/image8.png": "c7f81d8f1e84294e8cdbb28f0f668124",
"assets/assets/indexfinger.png": "1b43b8b1b4696bcc8c3cdee1e7995a71",
"assets/assets/iphone-logo.png": "794b4986c41d5b1f422c5d39bd80ee8e",
"assets/assets/iphone.png": "1bbb783f770c3a618c89f3449d780814",
"assets/assets/jobs.jpg": "d82d05111a0fc3aa44a80ed96019909e",
"assets/assets/laptop.png": "06692cdcf8adac1c5e488d5b46014233",
"assets/assets/laptop_glass.png": "3ef3bf37902a0d98f463b9518801ffee",
"assets/assets/logo.png": "03db9a6427021a3b6b7d2466a2e1478d",
"assets/assets/menu.png": "7777bd0a549e245607ebc0cad73cb093",
"assets/assets/mobile.jpg": "321106861414489d1c0b40447cf27db5",
"assets/assets/online.jpg": "31972e7e9474bc2bcde82cbf49306aac",
"assets/assets/playstore.png": "582c383fb128551389d481aabedb2a50",
"assets/assets/preparation.jpg": "b4a2257a70c3bd532bf918482e9b5d6b",
"assets/assets/preparation.png": "1a113474cc8ff7401ad37f0680a2af06",
"assets/assets/search.gif": "767be0a9d71a13042ceddfdf98ca873f",
"assets/assets/share_google_play_logo.png": "9e9997ddbdfe0726235e14ce5ce35cb7",
"assets/assets/sun.gif": "6d1398f10c92e3091a27491da83164b1",
"assets/assets/teacher.jpg": "20fec44c1631d63969d1fbc98cb3b32e",
"assets/assets/web.png": "472c7710cec29ff735abe6983757f32d",
"assets/FontManifest.json": "9366846267c637d414867c3c9b84ddd1",
"assets/fonts/MaterialIcons-Regular.otf": "c835cb667a89abe5725578dc43223ffa",
"assets/fonts/PTSerif-Bold.ttf": "72af20bd8438de5f0e5f8a8d75fc4bd4",
"assets/fonts/PTSerif-BoldItalic.ttf": "a35221c53525fd1d57beb447165825da",
"assets/fonts/PTSerif-Italic.ttf": "f264e36f9419562f1605901418716d43",
"assets/fonts/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/NOTICES": "ffedd63c16089d07ee25f10aecbdcb2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/favicon-16x16.png": "da938f4aefab61fc237cf7d34378a492",
"icons/favicon-32x32.png": "ad2d99b9e3af87dd225cb68eacc20249",
"icons/favicon.ico": "ec8be7837c5aafdc850e5ca906c0b4e6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "904b943b1f5df013d24e5214edfa41a3",
"/": "904b943b1f5df013d24e5214edfa41a3",
"main.dart.js": "22b8db3a59c4d4c8a13ee06bf8a5ac4b",
"manifest.json": "0acf344c22fffba64abf3bcb3d8d190d",
"version.json": "f21e4d309ded08539aad5f77573e62a9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
