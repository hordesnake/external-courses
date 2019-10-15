'use strict';

function passSubstrAfterNum(str, strArr, num) {
  let strNew = str.split(' ');
  return `${strNew.slice(0, num + 1).join(' ')} 
  ${strArr} ${strNew.slice(num + 1).join(' ')}`;
}

module.exports = passSubstrAfterNum;