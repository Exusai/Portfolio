'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "400659388654a0dc51c9fe9d5515b921",
"/": "400659388654a0dc51c9fe9d5515b921",
"main.dart.js": "98592f8aebc7a7a003d8c5b4acb00c43",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dd1abf8da9209dc0224e8b6b907c5a5a",
"Portfolio/index.html": "400659388654a0dc51c9fe9d5515b921",
"Portfolio/main.dart.js": "d77b7b9dabf71482b5938b2d9941f551",
"Portfolio/README.md": "ec68edffaacb5519d55a196b28de4e8c",
"Portfolio/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Portfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Portfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Portfolio/manifest.json": "dd1abf8da9209dc0224e8b6b907c5a5a",
"Portfolio/.git/config": "5e41d2982fe50478a3bb2fb521061201",
"Portfolio/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"Portfolio/.git/objects/66/240eb0a9c17cb2b21f89b8fd14a2a19e110387": "090adbe61e791157120ae7080bea6393",
"Portfolio/.git/objects/a4/aaa7d0b821345f9801e87669407a8425fdf5d6": "78f6805b216fa27a97c950bedb69bab0",
"Portfolio/.git/objects/b2/54410f999e0dd16e37348b6f2cc577990b9a23": "becef36c9aa9fde1f83d2e17c79873fb",
"Portfolio/.git/objects/d0/b08561f768ef7bc48783162ba298e911813617": "59bf9aa7a46aed195190f81c71c0d5c6",
"Portfolio/.git/objects/be/003d1131474c2e8035dc809285e07bf43fc959": "1e5a69038262582bfbcd95ed46e11abc",
"Portfolio/.git/objects/ee/5d8be208dc155ff79c6c6a0e95d0eeb4f055c9": "0c05f682808a2240704cecdca18bafae",
"Portfolio/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"Portfolio/.git/objects/e4/bbc80e0de28b7d817ecddfd8eb7ae41359d252": "1ec1e746f21270d9ea29af18ab430773",
"Portfolio/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"Portfolio/.git/objects/pack/pack-91238330357653f96209837b7518fdd21754759b.pack": "126458ad39245177f405fdd463d87708",
"Portfolio/.git/objects/pack/pack-91238330357653f96209837b7518fdd21754759b.idx": "6a690c528a69d121bbfbd74ec06f521a",
"Portfolio/.git/objects/1a/f94ec0beb53998b4111407fd657995c99a82bb": "c96ae7a4a3ff58d75cf3e80f4340cd8f",
"Portfolio/.git/objects/28/51430eeb751fe540fa420b7d700f55eca16663": "19bbf3857068d06e7f65fcae5897f88b",
"Portfolio/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"Portfolio/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"Portfolio/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"Portfolio/.git/objects/9a/af4f723450c0869cb7713d0434f94c63a66020": "cc2c0ab329f0c05334ef5d87c06d79a2",
"Portfolio/.git/objects/31/011194a227ddacfaef74ebda7639292418d850": "188457f4a56a57c5736276c1d9c5cb07",
"Portfolio/.git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
"Portfolio/.git/objects/08/0fe3e330cc42db82e99b3a7c3594c43c768eb1": "3247db1a4c8dbbb7aab1237f69fad4c2",
"Portfolio/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"Portfolio/.git/objects/0f/776390eb8f2b4c5718f251c9b504b2166385da": "5030758162609d462ff1d7f5a19a226c",
"Portfolio/.git/objects/a0/d1dbd3e71e3a813c25e13b7cb9e70cd8ab9c0a": "f9164e5c1326d19db17ad8c981383dd8",
"Portfolio/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"Portfolio/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"Portfolio/.git/objects/ea/6ff545a246caa64074ba809bbc86fcb8589071": "b2fdd5c59953cf2b34eb306ea074c8f7",
"Portfolio/.git/objects/e7/e2c2e282f70514d7f038cfbfc06a92014d92a8": "0f6f9d28e669670e1c469196f4a032f4",
"Portfolio/.git/objects/e7/9a8d749a566fe03cbac531347d68957e5617e0": "bc984240c78443cf13f32cf8e72a1950",
"Portfolio/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"Portfolio/.git/objects/2b/cc964f97f9723a318c164688dbcd8bd7d455a1": "00c2500e32c7ae9097c047dd311e314e",
"Portfolio/.git/objects/78/cf22a7a906f24fa95159a6ffa452078be60676": "74adb1a09fc6cccfa78daf1fe4c4a6c9",
"Portfolio/.git/objects/22/c385ce127976a8e1c2d2a51a6d87fc5e4f0736": "5fb98c27f723966714966164bd9ad638",
"Portfolio/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"Portfolio/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Portfolio/.git/logs/HEAD": "d11d3a42cc057e2481c824766b38d76c",
"Portfolio/.git/logs/refs/heads/master": "d11d3a42cc057e2481c824766b38d76c",
"Portfolio/.git/logs/refs/remotes/origin/HEAD": "7050098799ee4d001e2082d22b3cfe14",
"Portfolio/.git/logs/refs/remotes/origin/master": "7713429c4dba9ae01369d46d2b777153",
"Portfolio/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Portfolio/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Portfolio/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Portfolio/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"Portfolio/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Portfolio/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"Portfolio/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Portfolio/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Portfolio/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Portfolio/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Portfolio/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"Portfolio/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"Portfolio/.git/refs/heads/master": "9a45b8601fde16ec65d8942ee35f151a",
"Portfolio/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"Portfolio/.git/refs/remotes/origin/master": "9a45b8601fde16ec65d8942ee35f151a",
"Portfolio/.git/index": "b2aa85b949808aefa2ea2de18913a2b5",
"Portfolio/.git/packed-refs": "d8099d6c651799a15013f3fb6faf6601",
"Portfolio/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"Portfolio/.git/FETCH_HEAD": "797694894874f263f7cd2ce7122ac49f",
"Portfolio/assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"Portfolio/assets/AssetManifest.json": "3e34d882c6b7b044b5ddd7175bfa390a",
"Portfolio/assets/FontManifest.json": "49f4f464ff067beb60e836fbce6bbd51",
"Portfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"Portfolio/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"Portfolio/assets/assets/images/GitHub.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"Portfolio/assets/assets/images/CanAngle.JPG": "ab70fdd30a2655eb61dd9827aa5552d9",
"Portfolio/assets/assets/fonts/HelveticaNeue-01.ttf": "431abd6233013126d330814cb4a3bf9b",
"Portfolio/assets/assets/fonts/HelveticaNeue-Thin-13.ttf": "a76aa81ed598052224866dcdc419d2f1",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "3e34d882c6b7b044b5ddd7175bfa390a",
"assets/NOTICES": "108d0a1640e6b622b04c79e5a1de9f51",
"assets/FontManifest.json": "49f4f464ff067beb60e836fbce6bbd51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/GitHub.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/CanAngle.JPG": "ab70fdd30a2655eb61dd9827aa5552d9",
"assets/assets/fonts/HelveticaNeue-01.ttf": "431abd6233013126d330814cb4a3bf9b",
"assets/assets/fonts/HelveticaNeue-Thin-13.ttf": "a76aa81ed598052224866dcdc419d2f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
