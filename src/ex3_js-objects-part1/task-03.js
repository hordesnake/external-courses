'use strict';

function booLean(property, obj) {
  for (let key in obj) {
    if (key === property) {
      return true;
    }
  }
  return false;
};

module.exports = booLean;