// Language switch (remembered on this device) and the copy button of the support page.
(function () {
  var root = document.documentElement;
  document.querySelectorAll("[data-set]").forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-set");
      root.dataset.lang = lang;
      root.lang = lang;
      try { localStorage.setItem("lang", lang); } catch (_) {}
    });
  });
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var label = button.textContent;
      navigator.clipboard.writeText(button.getAttribute("data-copy")).then(function () {
        button.textContent = "✓";
        setTimeout(function () { button.textContent = label; }, 1500);
      }, function () {});
    });
  });
})();
