// ==UserScript==
// @name         BBVA Net Cash Tweaks
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Multiple tweaks for BBVA net Cash Colombia.
// @author       Federico JM
// @match        https://www.bbvanetcash.com.co/SCOTLCL/cashglobal/servlet/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function ($) {
    // jQuery is available on BBVA net cash.
    if (typeof $ === 'undefined') {
      return false;
    }

    // Allow scroll on long tables.
    $('#divtabla').css('overflow', 'initial');
})(window.jQuery);
