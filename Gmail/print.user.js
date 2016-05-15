// ==UserScript==
// @name         Gmail Print
// @namespace    http://federicojm.com/
// @version      0.2
// @description  Better email printing for Gmail.
// @author       Federico JM
// @match        https://mail.google.com/mail/*?*view=pt*
// @grant        GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.slim.js
// ==/UserScript==

/* - jshint settings - */
/* jshint esversion: 6 */
/* globals GM_addStyle */

setTimeout(function () {
    // Deferred onload
}, 2000);

(function ($) {
    'use strict';
    var $mc = $('.maincontent');
    var $el;

    $el = $mc.children('table').first();
    $el = $el.add($mc.children('hr').first());
    $mc.find('> .message > tbody').each(function () {
        $el = $el.add($(this).children('tr').slice(0, 2));
    });

    $el.addClass('gmail-hide');

    var $toggle = $('<button>');
    $toggle.html('Extra info - mostrar');
    $toggle.addClass('gmail-toggle');
    var $body = $('body');
    $body.append($toggle);

    var toggle = true;
    $toggle.click(function () {
        if (toggle) {
            $el.removeClass('gmail-hide');
            $toggle.html('Extra info - ocultar');
        } else {
            $el.addClass('gmail-hide');
            $toggle.html('Extra info - mostrar');
        }
        toggle = !toggle;
    });

    GM_addStyle(`
        body {
            margin: 0;
        }

        body > .bodycontainer > table,
        body > .bodycontainer > hr {
            display: none;
        }

        .gmail-hide {
            display: none;
        }

        .gmail-toggle {
            position: fixed;
            top: 5px;
            right: 5px;
        }

        @media print {
            .gmail-toggle {
                display: none;
            }
        }
    `);

})(jQuery);
