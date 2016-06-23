// ==UserScript==
// @name         Bancolombia password
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Submit password filled by password manager.
// @author       Federico JM
// @match        https://sucursalpersonas.transaccionesbancolombia.com/mua/VALIDATEPASSWORD
// @match        https://sucursalpersonas.transaccionesbancolombia.com/cb/pages/jsp/home/index.jsp
// @grant        none
// @run-at       document-end
// ==/UserScript==

/* - jshint settings - */
/* globals collect, clearKeys, inspect, enviar */


(function ($) {
    'use strict';

    // jQuery is loaded by Bancolombia.
    if (typeof $ === "undefined") {
        return false;
    }

    // Password manager fills password field.
    // Bancolombia uses an onscreen keyboard that fails with password managers.
    // Simulate clicking each number and submit.
    $(document).on('change', "#password", function() {
        var password = $(this).val();

        // Bancolombia sets a timeout for collect().
        // Run it if necessary.
        // Only available on first password.
        if (window.collect !== undefined && typeof dom_data_collection === "undefined") {
            collect();
        }

        if (password.length === 4) {
            clearKeys();
            for (var i = 0, len = password.length; i < len; i++) {
                $('#keyboard_ div:contains("' + password[i] + '")').parent().click();
            }
            // Only available on first password.
            if (window.inspect !== undefined) {
                inspect();
            }
            enviar();
        }
    });
})(window.jQuery);
