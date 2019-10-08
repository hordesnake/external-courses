'use strict';

function passSubstrAfterNum(str, strSub, num) {
  let arr = str.split(' ');
  for (let i = 0; i < arrStr.length; i++) {
    if (num === i + 1) {
      arr.splice(i + 2, 0, strSub);
    }
  }
  arr.join(' ');
  return;
}

module.exports = passSubstrAfterNum;