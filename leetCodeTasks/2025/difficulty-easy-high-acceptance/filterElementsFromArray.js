// https://leetcode.com/problems/filter-elements-from-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const filtered = [];

  arr.forEach((element, index) => {
    if(Boolean(fn(element, index))) {
      filtered.push(element)
    }
  })

  return filtered;

};

const fn = function greaterThan10(n) { return n > 10; }
console.log(filter([0,10,20,30], fn))

// const arr = [1,2,3];
// const fn = function firstIndex(n, i) { return i === 0; };

// const arr = [-2,-1,0,1,2];
// const fn = function plusOne(n) { return n + 1 }

// console.log(filter(arr, fn));

