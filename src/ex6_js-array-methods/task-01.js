function sliceAnalog(arr, property, end) {
    const result = [];
    if (end === undefined) {
      end = arr.length;
    } else if (end < 0) {
      end += arr.length;
    }
    if (property === undefined) {
      property = 0;
    } else if (property < 0) {
      property += arr.length;
    }
    for (property; property < end; property++) {
      result.push(arr[property]);
    }
    return result;
  }
  
  module.exports = sliceAnalog;