'use strict';

function showType(retArr) {
  if (typeof retArr === 'string') {
    return 'string';
  }
  if (typeof retArr === 'number' && !Number.isNaN(retArr)) {
    return 'number';
  }
  return undefined;
}

module.exports = showType;