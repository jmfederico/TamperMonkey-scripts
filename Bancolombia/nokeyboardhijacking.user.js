// ==UserScript==
// @name         Bancolombia Empresas - No keyboard hijacking
// @namespace    http://federicojm.com/
// @version      1.0
// @description  Disable Keyboard hijacking on Bancolombia Empresas login page.
// @author       Federico JM
// @match        https://olbe.todo1.com/SVE/control/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

var removeOnEvents = function (selector) {
  var element = document.querySelector(selector)

  for (var i = 0; i < element.attributes.length; i++) {
    if (element.attributes[i].name.startsWith('on')) {
      element.attributes[i].value = null
    }
  }
}

removeOnEvents('#USERPASS')
removeOnEvents('#CLIENTID')
removeOnEvents('#COMPANYID')
