'use strict';
function range(start, end) {
    const length = end - start;
    if (length < 0) return [];
    const array = [];
    for (let num = start; num <= end; num++) {
        array.push(num);
    }
    return array;
};

console.log(range(10, 20));

function rangeOdd(start, end){
    let arr = [];
    for(let i = start; i <= end; i+=2){
        arr.push(i);
    }
    return arr;
}
console.log(rangeOdd(10, 25));