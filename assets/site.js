// Language switching by URL: ?lang=ja (or zh-Hant, zh-Hans, ko, es, fr, de, pt-BR, ru, en).
// The pages are plain HTML; this only redirects to the matching translated page.
(function () {
  var langs = ["en", "zh-Hant", "zh-Hans", "ja", "ko", "es", "fr", "de", "pt-BR", "ru"];
  var alias = { zh: "zh-Hant", "zh-tw": "zh-Hant", "zh-hk": "zh-Hant", "zh-cn": "zh-Hans", pt: "pt-BR" };
  var m = /[?&]lang=([^&#]+)/.exec(location.search);
  if (!m) return;
  var want = decodeURIComponent(m[1]).toLowerCase();
  var target = alias[want];
  for (var i = 0; i < langs.length && !target; i++) {
    if (langs[i].toLowerCase() === want) target = langs[i];
  }
  var b = document.body;
  if (!target || target === b.getAttribute("data-lang")) return;
  var root = b.getAttribute("data-root");
  var page = b.getAttribute("data-page");
  location.replace(root + (target === "en" ? "" : target + "/") + (page ? page + "/" : "") + location.hash);
})();
