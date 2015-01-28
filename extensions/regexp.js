'use strict';
/**
 * @namespace RegExp
 * @description Function is used to escape all dangerous/reserved symbols
 *              in strings before creating RegExp with it
 * @param  {String} s String to escape
 * @return {String}   Escaped string
 */
RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};