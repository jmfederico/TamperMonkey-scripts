// ==UserScript==
// @name         BBVA Tweaks
// @namespace    http://federicojm.com/
// @version      0.3
// @description  Multiple tweaks for BBVA net Colombia.
// @author       Federico JM
// @match        https://nuevaversion.bbvanet.com.co/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.5.3/numeral.min.js
// @run-at       document-end
// ==/UserScript==

/* global numeral */

;(function ($) {
  'use strict'

  // jQuery is available on BBVA net.
  if (typeof $ === 'undefined') {
    return false
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
      var b = number % 10
      return b === 1 || b === 3 ? 'er'
        : b === 2 ? 'do'
          : b === 7 || b === 0 ? 'mo'
            : b === 8 ? 'vo'
              : b === 9 ? 'no' : 'to'
    },
    currency: {
      symbol: '$'
    }
  }
  numeral.language('es', language)

  // Set langauge for Numeral library.
  numeral.language('es')
  numeral.defaultFormat('0,0.00')

  var fixNumbers = function () {
    $('.balance, .currency, .conditionsData').each(function () {
      var $this = $(this)

      var matches = $this.html().match(/^([^0-9]*)([0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2}))$/)
      if (matches !== null) {
        numeral.language('en')
        var valor = numeral(matches[2])
        numeral.language('es')
        $this.html(matches[1] + valor.format())
      }
    })
  }

  fixNumbers()
  $(document).on('pfAjaxComplete', function () {
    fixNumbers()
  })

  // Set langauge for Numeral library.
  numeral.language('es')

  // Only on the main page.
  var paths = [
    '/bbva/kqco_co_web/page/globalPosition'
  ]
  if (paths.indexOf(window.location.pathname) >= 0) {
    var agregaSaldo = function () {
      var $parent = $('div.tab-head > span:contains("Tarjetas")').closest('.tab-group')

      $parent.find('.fjm-saldo').remove()
      // Add current balance to Credit Cards.
      $parent.find('tbody tr').each(function () {
        var $tr = $(this)
        var $total = $tr.find('td:eq(1) .balance')
        var $disponible = $tr.find('td:last .balance')

        numeral.language('es')
        var saldo = numeral($total.html()).subtract(numeral($disponible.html()))

        $disponible.append('<span class="fjm-saldo" style="color:DarkRed;"><br>' + saldo.format('$0,0.00') + '</span>')
      })
    }
    agregaSaldo()
    $(document).on('pfAjaxComplete', function () {
      agregaSaldo()
    })
  }
})(window.jQuery)
