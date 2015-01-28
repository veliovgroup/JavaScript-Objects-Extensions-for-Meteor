'use strict';
/*
 * Fix for ES if Date object has not now() method
 */
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}