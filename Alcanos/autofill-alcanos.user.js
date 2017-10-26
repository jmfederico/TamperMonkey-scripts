// ==UserScript==
// @name         Alcanos - Autofill bill info
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Autofill info for Alcanos payments
// @author       Federico JM
// @match        https://gateway.pagosonline.net/apps/facturacion/36715/index.html*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  window.zk.oldEndProcessing = window.zk.endProcessing

  window.zk.endProcessing = function () {
    window.zk.oldEndProcessing()

    var data = JSON.parse(localStorage.getItem('userscript-autofill'))

    if (data && data.usuario && data.banco && data.nombre && data.tipo && data.documento && data.telefono && data.email) {
      var usuario = document.querySelector('input[id$="q1"]')
      if (usuario) {
        usuario.value = data.usuario
        usuario.focus()
      }

      var banco = document.querySelector('select[id$="_8"]')
      if (banco) {
        banco.value = data.banco
        banco.focus()
      }

      var natural = document.querySelector('input[id$="58-real"]')
      if (natural) {
        natural.checked = true
        natural.click()
      }

      var nombre = document.querySelector('input[id$="b8"]')
      if (nombre) {
        nombre.value = data.nombre
        nombre.focus()
      }

      var tipo = document.querySelector('select[id$="g8"]')
      if (tipo) {
        tipo.value = data.tipo
        tipo.focus()
      }

      var documento = document.querySelector('input[id$="l8"]')
      if (documento) {
        documento.value = data.documento
        documento.focus()
      }

      var telefono = document.querySelector('input[id$="q8"]')
      if (telefono) {
        telefono.value = data.telefono
        telefono.focus()
      }

      var email = document.querySelector('input[id$="v8"]')
      if (email) {
        email.value = data.email
        email.focus()
      }
    } else {
      window.console.log('--- Userscript autofill ---\n\n' +
                         'Create a local data storage with autofill values.\n' +
                         'localStorage.setItem("userscript-autofill", JSON.stringify({"usuario":"USUARIO", "banco":"BANCO","nombre":"NOMBRE","tipo":"TIPO DE DOCUMENTO","documento":"00000000","telefono":"5551234","email":"EMAIL@DOMINIO.COM"}))\n\n' +
                         '--- Userscript autofill ---')
    }
  }
})()
