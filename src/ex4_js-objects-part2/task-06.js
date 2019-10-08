'use strict';

function returnWithHead(str) {
  let arrStr = str.split(' ');
  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].substr(1);
  }
  arrStr.join(' ');
  return;
}

module.exports = returnWithHead;