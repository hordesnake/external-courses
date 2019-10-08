'use strict';

function propertyObject(property, obj) {
  const result = obj;
  for (let key in result) {
    if (key === property) {
      return result;
    }
  }
  resultObj[property] = 'new';
  return result;
};

module.exports = propertyObject;