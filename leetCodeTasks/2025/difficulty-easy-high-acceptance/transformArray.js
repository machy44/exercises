// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = [];
    arr.forEach((value, index) => {
      newArray.push(fn(value, index))
    })

    return newArray;
};

const bla = map([1,2,3], (n, i) => { return n + i; });
console.log(bla);