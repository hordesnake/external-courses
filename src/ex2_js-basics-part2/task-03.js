'use strict';

function diffElements(arr) {
  let retArr = [0, 0, 0];
  arr.forEach((item) => {
    if (typeof item === 'number' && !Number.isNaN(item)) {
      if (item === 0) {
        retArr[2] += 1;
      } else if (item % 2 === 0) {
        retArr[0] += 1;
      } else {
        retArr[1] += 1;
      }
    }
  });
  return retArr;
}

module.exports = diffElements;