// ==UserScript==
// @name         Las Ceibas EPN - Autofill bill info
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Autofill info for Las Ceibas EPN payments
// @author       Federico JM
// @match        https://www.psepagos.co/PSEHostingUI/GetBankListBD.aspx*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  var data = JSON.parse(localStorage.getItem('userscript-autofill'))

  if (data && data.banco && data.tipo) {
    var banco = document.querySelector('select[name="listBanks"]')
    if (banco) {
      banco.value = data.banco
      banco.focus()
    }

    var tipo = document.querySelector('select[name="listUserType"]')
    if (tipo) {
      tipo.value = data.tipo
      tipo.focus()
    }
  } else {
    window.console.log('--- Userscript autofill ---\n\n' +
                        'Create a local data storage with autofill values.\n' +
                        'localStorage.setItem("userscript-autofill", JSON.stringify({"banco":"BANCO","tipo":"TIPO DE CLIENTE"}))\n\n' +
                        '--- Userscript autofill ---')
  }
})()
