// 中 / EN 语言切换
(function () {
  var KEY = "meathouse-lang";

  function apply(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-zh]").forEach(function (el) {
      var text = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
      if (text !== null) el.textContent = text;
    });
    document.querySelectorAll(".language-toggle button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function current() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return "zh";
  }

  document.querySelectorAll(".language-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });

  apply(current());
})();
