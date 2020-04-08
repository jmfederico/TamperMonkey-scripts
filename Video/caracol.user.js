// ==UserScript==
// @name         Caracol - Video iframe to top
// @namespace    http://federicojm.com/
// @version      1.0
// @description  Move the live stream video iframe to be the top location
// @author       Federico JM
// @match        https://noticias.caracoltv.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  let videoFrame = document.querySelector(
    ".field--name-field-live-signal iframe"
  );
  if (videoFrame) {
    document.location = videoFrame.src;
  }
})();
