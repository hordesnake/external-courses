'use strict';

function createDeepCopy(obj) {
  let clone;
  if (obj.length) {
    clone = [];
  } else {
    clone = {};
  }
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = createDeepCopy(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

module.exports = createDeepCopy;