// ==UserScript==
// @name         Claro Video - No video hijacking
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Disable video control hijacking by Claro Video
// @author       Federico JM
// @match        https://www.clarovideo.com/playerhtml5/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

;(() => {
  document.onselectstart = null
  document.oncontextmenu = null
  document.onmousedown = null

  let intervalId = window.setInterval(() => {
    let videoControls = document.querySelectorAll('vph5-controls')
    if (!videoControls.length) {
      return
    }
    window.clearInterval(intervalId)

    videoControls.forEach(node => {
      node.remove()
    })
    document.querySelector('video').controls = true
  }, 500)
})()
