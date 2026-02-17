/**
 * Theme swapper: переключение между light и dark версиями страницы.
 * При изменении чекбокса выполняется переход на соответствующую версию (*-light.html / *-dark.html).
 */
(function () {
  'use strict';

  function getAlternateThemeUrl() {
    var path = window.location.pathname || '';
    var base = window.location.origin || '';
    var search = window.location.search || '';
    var hash = window.location.hash || '';

    if (path.indexOf('-dark.html') !== -1) {
      return base + path.replace(/-dark\.html/, '-light.html') + search + hash;
    }
    if (path.indexOf('-light.html') !== -1) {
      return base + path.replace(/-light\.html/, '-dark.html') + search + hash;
    }
    return null;
  }

  function init() {
    var inputDark = document.getElementById('theme-swapper-input-dark');
    var inputLight = document.getElementById('theme-swapper-input-light');
    var input = inputDark || inputLight;

    if (!input) return;

    input.addEventListener('change', function () {
      var url = getAlternateThemeUrl();
      if (url) {
        window.location.href = url;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
