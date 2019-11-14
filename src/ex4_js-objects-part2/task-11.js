'use strict';

function countCharacter(str) {
  let strArr = str.split('');
  strArr = strArr.sort();
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    count++;
    if (strArr[i] !== strArr[i + 1]) {
      console.log(strArr[i] + " : " + count);
      count = 0;
    }
  }
  return str;
}

module.exports = countCharacter;