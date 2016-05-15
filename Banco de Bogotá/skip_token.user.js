// ==UserScript==
// @name         Banco de Bogotá Skip Token
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Skip Token security code validation.
// @author       Federico JM
// @match        https://www.bancodebogota.com/Banking/pb/logon/requestOTP
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function ($) {
    'use strict';

    // jQuery is loaded by Banco de Bogotá.
    if (typeof $ === "undefined") {
        return false;
    }

    // Skip token securty code validation.
    $('input[name="submit_activeOTP"]').click();

})(window.jQuery);
