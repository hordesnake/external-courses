'use strict';

function trimStringByNum(str, num) {
  if (str.length > num) {
    let strNew = str.substr(0, num - 1) + "…";
    return strNew;
  }
  return str;
}

module.exports = trimStringByNum;
