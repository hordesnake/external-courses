'use strict';

function booLean(string, obj) {
  for (let key in obj) {
    if (key === string) {
      return true;
    }
  }
  return false;
};

module.exports = booLean;