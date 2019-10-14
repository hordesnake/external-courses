'use strict';

function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1 + ' элемент массива: ' + arr[i]);
  }
  console.log('Длина массива: ' + arr.length);
}
module.exports = printArrayElements;