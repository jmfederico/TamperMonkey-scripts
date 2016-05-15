// ==UserScript==
// @name         Gmail hide white space
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Hide white space to the right of messages in preview pane.
// @author       Federico JM
// @match        https://mail.google.com/mail/*u/0/
// @grant        GM_addStyle
// ==/UserScript==

/* - jshint settings - */
/* globals GM_addStyle */

(function () {
    'use strict';
    GM_addStyle('td.Bu.y3:last-child {display: none;}');
})();
