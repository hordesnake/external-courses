'use strict';

function PropertyObject(property, obj) {
  const result = obj;
  for (let key in result) {
    if (key === property) {
      return result;
    }
  }
  result[property] = 'new';
  return result;
};

module.exports = PropertyObject;