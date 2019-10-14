'use strict';

function returnValueProtoProp(property, obj) {
  for (var key in obj){
		if(!obj.hasOwnProperty(key) && key === property){
			return obj[key];
		}
	}
	return undefined;
}

module.exports = returnValueProtoProp;