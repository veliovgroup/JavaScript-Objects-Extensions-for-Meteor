'use strict';
/*
 * @function
 * @namespace Math
 * @name getRandom
 * @param {int} min
 * @param {int} max
 * @description - Get random number between max and min values
 */
Math.getRandom = function(min, max) {
  if (!min) {
    min = 0;
  }
  if (!max) {
    max = 1000;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
