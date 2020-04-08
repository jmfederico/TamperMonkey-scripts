// ==UserScript==
// @name         El Espectador - Sticky header
// @namespace    http://federicojm.com/
// @version      1.0
// @description  Fix sticky header jump.
// @author       Federico JM
// @match        https://www.elespectador.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// Select the node that will be observed for mutations
const header = document.querySelector(".l-page .l-header");
const originalHeight = header.offsetHeight;

// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationsList, _observer) => {
  if (mutationsList[0].target.className === mutationsList[0].oldValue) {
    return;
  }

  const header = mutationsList[0].target;
  const main = header.nextElementSibling;

  if (header.classList.contains("header_sticky")) {
    main.style.marginTop = originalHeight + "px";
    return;
  }

  main.style.marginTop = null;
});

// Start observing the target node for configured mutations
observer.observe(header, {
  attributes: true,
  attributeFilter: ["class"],
  attributeOldValue: true
});
