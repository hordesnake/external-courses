'use strict';

const obj = {
  a: 1,
  b: 2
};
const testObj = {
  c: 3
};

function returnValueProtoProp(property, obj)
{
  for (let key in obj) {
    if (!(obj.hasOwnProperty(key)) && key === property) {
      return obj[key];
    }
  }
  return undefined;
}

module.exports = returnValueProtoProp;