  'use strict';

  function convertToLowerCamelCase(str) {
    let arr = str.split(' ');
    arr[0] = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    arr.join('');
    return;
  }

  module.exports = convertToLowerCamelCase;