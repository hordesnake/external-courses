function analogMethodReduce(array, callback, initialValue) {
  let result = 0;
  let i = 0;
  let arr = array;
  if (initialValue) {
    result = initialValue;
  } else {
    result = arr[0];
    i++
  }
  for (i; i < arrTemp.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}

module.exports = analogMethodReduce;