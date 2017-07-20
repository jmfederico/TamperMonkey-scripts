// ==UserScript==
// @name         Eletrohuila - Autofill zonapagos
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Autofill info for Electrohuila payments
// @author       Federico JM
// @match        https://www.zonapagos.com/t_electrhuila/pago.asp?estado_pago=iniciar_pago&identificador=*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  var data = JSON.parse(localStorage.getItem('userscript-autofill'))

  if (data && data.banco) {
    var terms = document.getElementsByName('ChkTerminos')
    if (terms.length === 1) {
      terms[0].checked = true
    }

    var banco = document.getElementsByName('lst_bancos_pse')
    if (banco.length === 1) {
      banco[0].value = data.banco
    }
  } else {
    window.console.log('--- Userscript autofill ---\n\n' +
                        'Create a local data storage with autofill values.\n' +
                        'localStorage.setItem("userscript-autofill", JSON.stringify({"banco":"BANCO"}))\n\n' +
                        '--- Userscript autofill ---')
  }
})()
