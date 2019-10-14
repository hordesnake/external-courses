'use strict';

function returnCopy(obj) {
  return Object.assign({}, obj); 
}

module.exports = returnCopy;