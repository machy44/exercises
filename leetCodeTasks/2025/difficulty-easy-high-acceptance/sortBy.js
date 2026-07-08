// https://leetcode.com/problems/sort-by/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  return arr.sort((a,b) => fn(a) - fn(b));
};

// console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], d => d.x));// [{"x": -1}, {"x": 0}, {"x": 1}]
console.log(sortBy([[3, 4], [5, 2], [10, 1]], x=> x[1])); // [[10, 1], [5, 2], [3, 4]]
console.log(sortBy([[5,4],[10,0],[6,7],[15,1]], (x) => x[0] + x[1]));//[[5,4],[10,0],[6,7],[15,1]]
