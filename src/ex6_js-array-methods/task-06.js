function reduceAnalog(array, callback, initValue) {
  let previousValue = array[0], i = 1;
  if (arguments.length > 2) {
      previousValue = initValue;
      i = 0;
  }
  for (; i < array.length; i++) {
      previousValue = callback(previousValue , array[i], i, array) 
  }
  return previousValue;
}

module.exports = reduceAnalog;