// ==UserScript==
// @name         BBVA Net Cash Twiks
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Multiple twiks for BBVAnet Cash Colombia.
// @author       Federico JM
// @match        https://www.bbvanetcash.com.co/SCOTLCL/cashglobal/servlet/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function ($) {
    'use strict';

    // jQuery is available on BBVAnet cash.
    if (typeof $ === "undefined") {
        return false;
    }

    // Allow scroll on long tables.
    $('#divtabla').css('overflow', 'initial');

})(window.jQuery);
