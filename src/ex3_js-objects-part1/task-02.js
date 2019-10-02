'use strict';

function KeysValues(obj) {
  for (let key in obj) {
    if (key) {
      console.log(key + ": " + obj[key]);
    }
  };
};

module.exports = KeysValues;