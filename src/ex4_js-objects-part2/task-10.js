'use strict';

function reverseStr(str) {
  let strArr = str.split('');
  let strReverce = [];
  for (let i = strArr.length - 1; i > -1; i--) {
    strReverce.push(strArr[i]);
  }
  strReverce.join('');
  return;
}

module.exports = reverseStr;