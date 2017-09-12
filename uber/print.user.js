// ==UserScript==
// @name         Better Uber print
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Hide unimportant information from printing.
// @author       Federico JM
// @match        https://riders.uber.com/trips/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

/* globals GM_addStyle */

(function () {
  GM_addStyle(`
    @media print {
      .page-header,
      .page-footer,
      .page-sidebar,
      .trip-details__review,
      #trip-details__actions {
        display: none;
      }
    }
  `)
})()
