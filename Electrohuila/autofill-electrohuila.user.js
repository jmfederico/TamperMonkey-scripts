// ==UserScript==
// @name         Eletrohuila - Autofill bill info
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Autofill info for Electrohuila payments
// @author       Federico JM
// @match        http://www.electrohuila.com.co/Pago_Electronico/PagosEnLinea.aspx
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  var data = JSON.parse(localStorage.getItem('userscript-autofill'))

  if (data && data.email && data.mobile) {
    var email = document.getElementById('dnn_ctr695_ViewGWZonaPagos_txtEmail')
    if (email) {
      email.value = data.email
    }
    var mobile = document.getElementById('dnn_ctr695_ViewGWZonaPagos_txtPhoneNumber')
    if (mobile) {
      mobile.value = data.mobile
    }
  } else {
    window.console.log('--- Userscript autofill ---\n\n' +
                       'Create a local data storage with autofill values.\n' +
                       'localStorage.setItem("userscript-autofill", JSON.stringify({"email":"EMAIL","mobile":"MOBILE"}))\n\n' +
                       '--- Userscript autofill ---')
  }
})()