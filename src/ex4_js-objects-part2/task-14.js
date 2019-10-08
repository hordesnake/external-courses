'use strict';

function returnRandomIntInRange(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = returnRandomIntInRange;