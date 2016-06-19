// ==UserScript==
// @name         BBVA Twiks
// @namespace    http://federicojm.com/
// @version      0.4
// @description  Multiple twiks for BBVAnet Colombia.
// @author       Federico JM
// @match        https://www.e-bbva.com.co/*
// @match        https://www.bbvanet.com.co/bbvavip/colombiavip/OperacionCBTFServlet*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.5.3/numeral.min.js
// @run-at       document-end
// ==/UserScript==

/* - jshint settings - */
/* globals numeral */

(function ($) {
    'use strict';

    // jQuery is available on BBVAnet on main frame only. This filters other frames.
    if (typeof $ === "undefined") {
        return false;
    }

    // Spanish for Numeral.
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return b === 1 || b === 3 ? 'er' :
                b === 2 ? 'do' :
                b === 7 || b === 0 ? 'mo' :
                b === 8 ? 'vo' :
                b === 9 ? 'no' : 'to';
        },
        currency: {
            symbol: '$'
        }
    };
    numeral.language('es', language);

    // Set langauge for Numeral library.
    numeral.language('es');
    numeral.defaultFormat('0,0.00');

    $('.pesetas:not(:has(*)), .pesetas-i:not(:has(*)), .pesetas1:not(:has(*)), .dato:not(:has(*))').each(function () {
        var $this = $(this);

        if ($this.html().match(/[0-9]{1,3},[0-9]{3}(\.[0-9]{2})?$/) !== null) {
            numeral.language('en');
            var valor = numeral($this.html());
            numeral.language('es');
            $this.html(valor.format());
        }
    });

    // Set langauge for Numeral library.
    numeral.language('es');

    // Only on the main page.
    var paths = [
        "?proceso=posicion_global_pr&operacion=posicion_global_op&accion=menuPosicion",
        "?proceso=operaciones_generales_pr&operacion=inicio_op&accion=inicio",
    ];
    if (paths.indexOf($(location).attr('search')) >= 0) {
        // Move main table to the beginning of the page.
        var $main = $('body>div:eq(-1)');
        $main.children('table:eq(-1)').detach().prependTo($main);

        // Add current balance to Credit Cards.
        $('p.titulotabla:contains("Tarjetas de Crédito")').closest('table').find('tr:gt(1):lt(-2)').each(function () {
            var $tr = $(this);
            var $total = $tr.find('td:eq(2) .pesetas');
            var $disponible = $tr.find('td:last .pesetas');

            numeral.language('es');
            var saldo = numeral($total.html()).subtract(numeral($disponible.html()));

            var span = '<span style="display:inline-block; width:80px; color:DarkRed;">';
            $disponible.append(span + saldo.format('0,0.00') + '</span>');
        });
    }

})(window.jQuery);
