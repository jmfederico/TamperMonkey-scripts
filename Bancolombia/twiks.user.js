// ==UserScript==
// @name         Bancolombia Twiks
// @namespace    http://federicojm.com/
// @version      0.3
// @description  Multiple twiks for Bancolombia.
// @author       Federico JM
// @match        https://sucursalpersonas.transaccionesbancolombia.com/cb/pages/jsp/home/index.jsp
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.5.3/numeral.min.js
// @run-at       document-end
// ==/UserScript==

/* global numeral */

;(function ($) {
  'use strict'

  // jQuery is available on BBVAnet on main frame only. This filters other frames.
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

  $(document).ajaxComplete(function () {
    var $items = $('#gridProductID_home td:nth-child(3) > span') // Home
      .add('#history-container .Row > .Cell_home:nth-child(3) > span') // Home
      .add('.detail-box > div > div:nth-child(2)') // Product detail
      .add('.gral-form-container .row > div') // Product detail
      .add('[aria-describedby="gridProductID_creditCardDetails_amount"] > span') // Product detail

    $items.contents().filter(function () {
      if (this.nodeType === window.Node.TEXT_NODE) {
        var matches = this.nodeValue.match(/^([^0-9,]*)([0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2}))$/)
        if (matches) {
          this.matchedValues = matches
          return true
        }
      }
      return false
    }).each(function () {
      numeral.language('en')
      var valor = numeral(this.matchedValues[2])
      numeral.language('es')
      this.nodeValue = this.matchedValues[1] + valor.format()
    })
  })

  // Set langauge for Numeral library.
  numeral.language('es')
})(window.jQuery)
