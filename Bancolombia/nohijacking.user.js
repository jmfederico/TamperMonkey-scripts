// ==UserScript==
// @name         Bancolombia Personas - No hijacking
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Disable Keyboard and Mouse hijacking on Bancolombia Personas.
// @author       Federico JM
// @match        https://sucursalpersonas.transaccionesbancolombia.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

document.oncontextmenu = null
document.onmouseup = null
document.onmousedown = null

if (typeof $ === 'function') {
  $(document).ready(function () {
    $('*').unbind('cut copy paste')
  })
}
