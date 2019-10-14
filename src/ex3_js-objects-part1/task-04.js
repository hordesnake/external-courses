'use strict';

function PropertyObject(property, obj) {
  let newObj = obj;
  if (!newObj.hasOwnProperty(property)) {
    newObj[property] = 'new';
  }
  return newObj;
}

module.exports = PropertyObject;