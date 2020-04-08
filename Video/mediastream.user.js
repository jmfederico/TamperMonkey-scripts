// ==UserScript==
// @name         MediaStream - No overlay
// @namespace    http://federicojm.com/
// @version      1.0
// @description  Remove div tags as overlay to allow direct access to video tag
// @author       Federico JM
// @match        https://mdstrm.com/live-stream/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  let intervalId = window.setInterval(() => {
    let video = document.querySelector(".screen-container > video");
    if (!video || video.paused === true) {
      return;
    }
    window.clearInterval(intervalId);

    document.querySelectorAll(".screen-container > div").forEach(node => {
      node.remove();
    });
    video.controls = true;
  }, 500);
})();
