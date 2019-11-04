'use strict';
function ReturnStrWithoutSideSpaces(str) {
  if (str[0] === " " && str[str.length-1] === " ") {
    let strNew = str.slice(1, str.length-1);
    return strNew;
  }
  return str;
}

module.exports = ReturnStrWithoutSideSpaces;
