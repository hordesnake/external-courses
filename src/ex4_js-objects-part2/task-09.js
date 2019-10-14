'use strict';

function passSubstrAfterNum(str, strArr, num) {
  let arr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (num === i + 1) {
      arr.splice(i + 2, 0, strArr);
    }
  }
  arr.join(' ');
  return;
}

module.exports = passSubstrAfterNum;