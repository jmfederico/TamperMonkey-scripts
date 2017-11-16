// ==UserScript==
// @name         Las Ceibas EPN - Autofill web invoice
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Autofill info to retreive Las Ceibas EPN invoice
// @author       Federico JM
// @match        http://www.lasceibas.gov.co/aplicaciones/factura/index.php
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  var data = JSON.parse(localStorage.getItem('userscript-autofill'))

  if (data && data.ref) {
    var tipo = document.querySelector('input[value="cuenta"]')
    if (tipo) {
      tipo.checked = true
    }

    var ref = document.querySelector('#numero_referencia')
    if (ref) {
      ref.value = data.ref
    }
  } else {
    window.console.log('--- Userscript autofill ---\n\n' +
                        'Create a local data storage with autofill values.\n' +
                        'localStorage.setItem("userscript-autofill", JSON.stringify({"ref": "NUMERODECUENTA"}))\n\n' +
                        '--- Userscript autofill ---')
  }
})()
