'use strict';

function checkProperty(property, obj) {
  for (let key in obj) {
    if (key === property) {
      return true;
    }
  }
  return false;
};

module.exports = checkProperty;