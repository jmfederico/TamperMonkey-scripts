// ==UserScript==
// @name         Mi Claro - Tweaks
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Remove annoying chat popup that ALWAYS shows up.
// @author       Federico JM
// @match        http://miclaro.claro.com.co/wps/myportal/co/mtmx/mi-telmex*
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  var deleteChat = function () {
    var chat = document.getElementById('inbenta')
    if (chat) {
      chat.remove()
      clearInterval(intervalId)
    }
  }
  var intervalId = setInterval(deleteChat, 500)
})()
