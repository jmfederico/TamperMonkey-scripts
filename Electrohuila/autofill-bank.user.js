// ==UserScript==
// @name         Eletrohuila - Autofill zonapagos
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Autofill info for Electrohuila payments
// @author       Federico JM
// @match        https://www.zonapagos.com/t_electrhuila/pago.asp?estado_pago=iniciar_pago&identificador=*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  var terms = document.getElementsByName('ChkTerminos')
  if (terms.lenght === 1) {
    terms[0].checked = true
  }

  var banco = document.getElementsByName('lst_bancos_pse')
  if (banco.lenght === 1) {
    banco[0].value = 1013
  }
})()
