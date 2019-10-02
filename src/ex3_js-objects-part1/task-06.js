'use strict';

function returnDeepObj(obj) {
  let clone;
  if (obj.length) {
    clone = [];
  } else {
    clone = {};
  }
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = returnDeepObj(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

module.exports = returnDeepObj;