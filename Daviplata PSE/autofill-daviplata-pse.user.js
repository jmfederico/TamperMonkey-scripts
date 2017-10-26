// ==UserScript==
// @name         Daviplata PSE - Autofill bill info
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Autofill info for Daviplata PSE payments
// @author       Federico JM
// @match        https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=2508
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  var data = JSON.parse(localStorage.getItem('userscript-autofill'))

  if (data && data.davicel && data.nombre && data.tipo && data.documento && data.telefono && data.email) {
    document.querySelector('input[name="queryID"]').value = data.davicel
    document.querySelector('input[name="Customer_name"]').value = data.nombre
    document.querySelector('select[name="ID_type"]').value = data.tipo
    document.querySelector('input[name="ID_Number"]').value = data.documento
    document.querySelector('input[name="email"]').value = data.email
    document.querySelector('input[name="Phone"]').value = data.telefono
    setTimeout(function() {
      document.querySelector('input[name="payment_Amount"]').focus()
    }, 1000)

  } else {
    window.console.log('--- Userscript autofill ---\n\n' +
                       'Create a local data storage with autofill values.\n' +
                       'localStorage.setItem("userscript-autofill", JSON.stringify({"davicel":"5551234567", "nombre":"NOMBRE", "tipo":"TIPO DE DOCUMENTO", "documento":"00000000", "telefono":"5551234", "email":"EMAIL@DOMINIO.COM"}))\n\n' +
                       '--- Userscript autofill ---')
  }
})()
