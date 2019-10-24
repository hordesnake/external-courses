function analogMethodSome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function analogMethodSome(arr, callback) {
  module.exports = analogSome;