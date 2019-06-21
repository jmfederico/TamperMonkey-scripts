// ==UserScript==
// @name         Bancolombia Personas - No hijacking
// @namespace    http://federicojm.com/
// @version      1.0
// @description  Disable Keyboard and Mouse hijacking on Bancolombia Personas.
// @author       Federico JM
// @match        https://sucursalpersonas.transaccionesbancolombia.com/*
// @match        https://extractosinternet.bancolombia.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

;(function ($) {
  document.oncontextmenu = null
  document.onmouseup = null
  document.onmousedown = null
  document.onkeydown = null

  if (typeof $ === 'function') {
    $(document).ready(function () {
      $('*').unbind('cut copy paste')
    })
  }
})(window.jQuery)
