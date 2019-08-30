// ==UserScript==
// @name         Claro Video - No mouse hijacking
// @namespace    http://federicojm.com/
// @version      0.1
// @description  Disable mouse hijacking by Claro Video
// @author       Federico JM
// @match        https://www.clarovideo.com/playerhtml5/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

document.onselectstart = null
document.oncontextmenu = null
document.onmousedown = null
