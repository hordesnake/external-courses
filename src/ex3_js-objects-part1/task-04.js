'use strict';

function PropertyObject(string, obj) {
  const result = obj;
  for (let key in result) {
    if (key === string) {
      return result;
    }
  }
  result[string] = 'new';
  return result;
};

module.exports = PropertyObject;