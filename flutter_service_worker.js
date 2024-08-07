'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "08b0e46ce722f884d2bac0d3adebabcb",
"version.json": "c799b45ed02bfff44cb5f61d39255f24",
"index.html": "050085d1244aafb998faa6ad46b8da50",
"/": "050085d1244aafb998faa6ad46b8da50",
"main.dart.js": "c8bf50976cc7c80fa24c1b631c769849",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.svg": "6d23df51c7f84f498db8f00ad258d171",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83cfdadf860413aacae2fced4f95dfb0",
"typing.gif": "0e716018947198cac7451aefd251a4a0",
"assets/AssetManifest.json": "4975e64a0bb4af813f669e030de8487f",
"assets/NOTICES": "1a3a18b17aedf7ddd5a62eb4eefe26be",
"assets/FontManifest.json": "fe1f606a71564ecba833f6e7dfba0820",
"assets/AssetManifest.bin.json": "63c97a497655718381d6081f322fe051",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/resources/images/adm_cover_ns.png": "a1164460b0c38c5adf5f61966d09c5cb",
"assets/lib/resources/images/emc_icon.png": "c64b4737b9bdd4215999dec54e8128d5",
"assets/lib/resources/images/Fakuraa.png": "03397bea3c90bc1305a6fc53835c9eb3",
"assets/lib/resources/images/bsn_icon.png": "72b3bd03b793216b5f122ceab90846c1",
"assets/lib/resources/images/ic_git.png": "c503623d4b8a10e78dceea1b4c7bbf31",
"assets/lib/resources/images/sharp_icon.png": "7609e69b6adfa1f5c4c440fd6be9d1c2",
"assets/lib/resources/images/uph_logo.png": "9a475166dc5910beaeed7a66d451a60b",
"assets/lib/resources/images/sharp_cover_ns.png": "5d161518a5a3111991cbcf7bd8865b5c",
"assets/lib/resources/images/jsm_cover_ns.png": "71cf4a4c9a926d1d02cb1cc2a60fdc37",
"assets/lib/resources/images/profile.png": "fb655544e3b49e83de1323ff60dc3e61",
"assets/lib/resources/images/emc_cover_ns.png": "09696b006fd714e3438b46897eec2931",
"assets/lib/resources/images/jsm_icon.png": "21411de17f537eddbf02b080d5224c84",
"assets/lib/resources/images/bsn_cover.png": "417d10f9e4404b3c594933a773441656",
"assets/lib/resources/images/ic_flutter.png": "23730d95f0efebd6bde42c8715c0da3f",
"assets/lib/resources/images/uph_cover_ns.png": "5c2fec3d6d0d78ee474402f8a037c3d2",
"assets/lib/resources/images/adm_icon.png": "6ad7d0dd26b9134b7d0d93fafd639887",
"assets/lib/resources/lotties/device_new.json": "65b835638b088cef6a06c7caee365dc3",
"assets/lib/firebase_options.dart": "3e0a8987ca2df4db9345325b72fe4387",
"assets/lib/main.dart": "6cba0311e0e16e8709e81d58c1aa4195",
"assets/AssetManifest.bin": "e58bdc1286de81cbedbd8efc0ac75ef8",
"assets/fonts/MaterialIcons-Regular.otf": "f6446baa4a01a06d9c59b78a87ee18fe",
"assets/assets/images/ic_itb.png": "59d0f2d2bdf1c1016d760973837e7501",
"assets/assets/images/cert_ios.jpg": "577744d1239adc83f5bb871ce04cbc92",
"assets/assets/images/ic_udemy.svg": "b9b16ec28960b9203d346de4e1761880",
"assets/assets/images/ic_git.svg": "7ab2e15ef5c4957d350719f8392a380c",
"assets/assets/images/ic_certification.svg": "b4805e2d4b86079c842d0dec14b4a8af",
"assets/assets/images/ic_swift.svg": "63401c50a9876749ceba56f81d59f152",
"assets/assets/images/ic_bsn.png": "5a711cf9e6cebb4f86afd82199cecd85",
"assets/assets/images/ic_bkpm.png": "4b0fb3dc012d37336acec38882c6821d",
"assets/assets/images/btn_appstore.png": "b4781fb345ac75f54e18b7d618cb582f",
"assets/assets/images/ic_cloud_experience.svg": "0ab64d24e93d2b15be313bde581446fc",
"assets/assets/images/ic_suitmedia.png": "a52b0c6526215b998200a6c4b3b062f9",
"assets/assets/images/ic_pac.png": "b11c7ddae6bc4934374461fe73f198c5",
"assets/assets/images/proj_ss_ezee.png": "9c1450d66b7a6c948d627196da7470ea",
"assets/assets/images/ic_eoffice.png": "2848fe5cd1f80794fed6d99bf4fe9650",
"assets/assets/images/bg_leaf.svg": "73b825a37c6b0cb8f24d90dacfb37b6b",
"assets/assets/images/ic_divider_rock.svg": "6d5c96105158aa281cd491aeda01503e",
"assets/assets/images/cert_flutter_2021.jpg": "910ad6df0b480d1e07939598c3dbd73c",
"assets/assets/images/ic_jetpack_compose.svg": "198405d5593435bb0d1f9ea375c2f335",
"assets/assets/images/forest_shadow.svg": "c739d15b0cd51a641bde29fbf2147471",
"assets/assets/images/ic_mediatama.png": "37a0fceb5dd761f85ff39ee7d09192ec",
"assets/assets/images/cert_basic_ux.jpg": "30df71c9969077160258c1cd38b74f2a",
"assets/assets/images/proj_ss_emc.png": "8c706aba8c3f2488a6f0c1140b2781b3",
"assets/assets/images/forest.svg": "c7a5053379f8332e6717b31f19dbc459",
"assets/assets/images/github.svg": "4c53a70d356bde0b0572246066698abf",
"assets/assets/images/proj_ss_bukuaku.png": "69dfd67d3d8edefdcfe0c80019dee01e",
"assets/assets/images/proj_ss_graha.png": "53c534b9fb5d1136191a263b56be4085",
"assets/assets/images/bg_trees.svg": "a39fcb7635df5c38336beed48b446baa",
"assets/assets/images/ic_mountain_experience.svg": "e264a351b8bb1966bb2f23bff6d6f851",
"assets/assets/images/ic_uph.png": "3afb7fb44a3c299f2f8fc9e17b547d08",
"assets/assets/images/mountain_shadow.svg": "08b5ca159c0fe6d68e4df1d6837b1054",
"assets/assets/images/ic_location.svg": "72d9a0004862ec6ed1cbf0e78fcb50bd",
"assets/assets/images/cloud_pict_2.svg": "8a5d111692eeec47ce9edc0c3822d285",
"assets/assets/images/ic_laravel.svg": "371cf572f044fa7e808e07356d024e29",
"assets/assets/images/cloud_pict_3.svg": "5ebd82d8e4a6cdb153b0b357d8a7dfce",
"assets/assets/images/ic_developer.svg": "e657996e8bf913e0a3cc2ecd15483c7a",
"assets/assets/images/bg_footer.svg": "932e0bccc4678aec8543cde4e369df22",
"assets/assets/images/ellipse.svg": "cfcc43a7ae4ff347548fe8b6c7d0dc84",
"assets/assets/images/cloud_pict_1.svg": "a4838507f8661236fef01b8d30c0bfc3",
"assets/assets/images/btn_playstore.png": "28141bb5bbe4a1d351a0a29738386fec",
"assets/assets/images/ic_kotlin.svg": "8fc249f22e774580a47e8687c1f18e73",
"assets/assets/images/ic_bws.png": "12989d959e1edb5dda864b4d35a7a414",
"assets/assets/images/ic_calendar.svg": "6a4bd75a142632924e37375f459aabd7",
"assets/assets/images/proj_ss_smi.png": "b90882ef84ddb27d6e8288e79298bbda",
"assets/assets/images/ic_mapbox.svg": "80201cb7c1aa1ef351333fc629e72463",
"assets/assets/images/ic_telkom.png": "6a97033d24b327ae64e095d091a5f215",
"assets/assets/images/cloud_skill.svg": "09ae56fbaf8dcbd726759671e21a2c23",
"assets/assets/images/ic_sharp.png": "6863a183342818f3afe4190d888aa302",
"assets/assets/images/bg_trees_2.svg": "707cbb6ec75551956e9c9e9e195e3116",
"assets/assets/images/cert_jetpack_compose.jpg": "b0a67e82a08bcd180a8be0f4edef2927",
"assets/assets/images/proj_ss_jmarsip.png": "a07debc7c1c319615c5fa08852a7de4d",
"assets/assets/images/proj_ss_wecare.png": "eee6943ba37e5cd5f9803023df3b5e85",
"assets/assets/images/profile_picture.png": "4793a62609f3d331bd7c592b8faf79dc",
"assets/assets/images/ic_udemy.png": "81fe8ab8516824885cce190c25029a5a",
"assets/assets/images/ic_java.svg": "7b6641c5e7c4556e8dfe51b44ae3b38f",
"assets/assets/images/cloud_bottom.svg": "9efdd3e4d56cba30ab838465d23dc356",
"assets/assets/images/ic_emcdoctor.png": "1d08303e8f13aa36c2684f32a1573df7",
"assets/assets/images/ic_flutter.svg": "d085a8a4c9481d55a190a97c442f568c",
"assets/assets/images/proj_ss_bws.png": "451e202cb3908ffa4a13e2c603fe65bc",
"assets/assets/images/ic_smi.png": "1593acd3ca3e3beac8725d9aadd07f67",
"assets/assets/images/ic_skillacademy.svg": "83ec505e9db64f39d58281b95b2f600d",
"assets/assets/images/proj_ss_emcdoctor.png": "6f1d2e633075256ad769a4c1713a1a82",
"assets/assets/images/ic_graha.png": "887e3495675ac69ee0afd2f473e06181",
"assets/assets/images/ic_firebase.svg": "4b828bd0812108d0b7361d54ee99268d",
"assets/assets/images/ic_blue_divider.svg": "05c8917836ec85f9ab8fcad8cc21a0dc",
"assets/assets/images/ic_cave.svg": "0cb3dfb9a1c8ee9bb422539970f03688",
"assets/assets/images/cert_flutter_flame.jpg": "bdafbf010c5c0b5249cf7d9cfa87561a",
"assets/assets/images/typing.gif": "0e716018947198cac7451aefd251a4a0",
"assets/assets/images/ic_cloud_mountain.png": "148b7336a752e94bd7b33493e786e636",
"assets/assets/images/ic_jsm.png": "aa7ec296238e9aff11165d1c31ed9c32",
"assets/assets/images/proj_ss_bkpm.png": "6fd37b5c9b44a20063e50eba2804591d",
"assets/assets/images/ic_android.svg": "1b322a9abfa71ac169333a03c03912c2",
"assets/assets/images/proj_ss_itb.png": "38796748178eeed2c1453c2d781e1818",
"assets/assets/images/ic_dart.svg": "04da5b9a1024da9b7f8dc1ac0d3ae09e",
"assets/assets/images/ic_ezee.png": "0cd2bdf5948012ff1b6a605500adb867",
"assets/assets/images/ic_bappppeda.png": "33a78db28bfa0c4bf86d05cd88bbb87b",
"assets/assets/images/linkedin.svg": "be2aed273cb4f960d5fd6f1141f304f4",
"assets/assets/images/cert_mastering_android.jpg": "edb6287b5c462b6442291cb0299eb141",
"assets/assets/images/proj_ss_eoffice.png": "5c68572508e9b894473d6211df2b8dff",
"assets/assets/images/proj_ss_bsn.png": "3f6c474ec564134e6f2ce3ca7796ee80",
"assets/assets/images/mountain.svg": "3ac30eeb39f0d48379f1655d627aad9b",
"assets/assets/images/ic_graduation.svg": "7bba1435657a8bf424d919278a2d60f2",
"assets/assets/images/logo.svg": "6d23df51c7f84f498db8f00ad258d171",
"assets/assets/images/ic_skillacademy.png": "7ec7a7be42e44dc8a0fac8f583e82ea5",
"assets/assets/images/ic_bukuaku.png": "18d9400da7b7d8213e19e04daa254880",
"assets/assets/images/proj_ss_sharp.png": "02fc2e200916bde5493505ced350e355",
"assets/assets/images/ic_emc.png": "8bdb7f8a3ec8d3e3b2a050109ab2521c",
"assets/assets/images/ic_wecare.png": "f8411d769be75260f2dc892c142e72c2",
"assets/assets/images/scroll_down.svg": "5feabb666a6bebc8a8a175935c7f2971",
"assets/assets/images/proj_ss_uph.png": "ec936e4e765337fac93a0784af03a445",
"assets/assets/images/ic_university.svg": "4d3fdca65ad61bf6849c156c3bf8e2cd",
"assets/assets/fonts/Google-Sans/GoogleSans-Italic.ttf": "0ecddcdeccb7761ce899aa9ad9f0ac3f",
"assets/assets/fonts/Google-Sans/GoogleSans-Bold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/assets/fonts/Google-Sans/GoogleSans-BoldItalic.ttf": "90773b6158663ab0fe78b32680733677",
"assets/assets/fonts/Google-Sans/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/fonts/Google-Sans/GoogleSans-MediumItalic.ttf": "8fd3737925e83c87d78a13700ccf9a62",
"assets/assets/fonts/Google-Sans/GoogleSans-Medium.ttf": "8d57e4014b18edef070d285746485115",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-SemiBoldItalic.ttf": "25178032f9e824996f04622926833459",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-Medium.ttf": "ee83103a4a777209b0f759a4ff598066",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-SemiBold.ttf": "1ca9107e7544d3424419585c7c84cb67",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-MediumItalic.ttf": "eb7dadea8e7c37ce1a1406045dda7c1e",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-LightItalic.ttf": "453b2bbf7ad0bb52a93f64ac96641f24",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-ExtraLight.ttf": "dc4c7cbc44c833f9a7540a6464a015fa",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-Thin.ttf": "969246a285e76a59329d5e003f1a28a0",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-ThinItalic.ttf": "984c6ee79e119ff312f599e0e1b21932",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-BoldItalic.ttf": "ee425cc83f37323665790c89758cf359",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-Light.ttf": "29047654270fd882ab9e9ec10e28f7c5",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-Italic.ttf": "40bbef08ca6f6edea2a9a9e882541ce0",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-Regular.ttf": "c02b4dc6554c116e4c40f254889d5871",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-ExtraLightItalic.ttf": "71efb00c2fc462eb4c4f778dac53e6dc",
"assets/assets/fonts/IBM-Plex-Sans/IBMPlexSans-Bold.ttf": "5159a5d89abe8bf68b09b569dbeccbc0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
