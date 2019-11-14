  function analogSlice(array, begin = 0, end = array.length){
    let arraySlice = [];
    let argBegin = begin < 0 ? array.length + begin : begin;
    let argEnd = end < 0 ? array.length + end : end;
    array.forEach((item, index, array) => {
        if( index >= argBegin && index < argEnd) {
            arraySlice.push(item);
        }
    });
    return arraySlice;
};

module.exports = analogSlice;