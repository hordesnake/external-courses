'use strict';

function returnCopy(obj) {
  const copy = [];
  for (let key in copy) {
    if (key) {
      copy[key] = obj[key];
    }
  }
  return copyObj;
};

module.exports = returnCopy;