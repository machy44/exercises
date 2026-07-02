// https://leetcode.com/problems/sort-by/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {

  if (arr.length <= 1) {
    return arr; // Base case: already sorted
  }

  const sortedArray = [arr[0]];
  let head = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if(fn(arr[i]) > head) {
      sortedArray.splice(arr.indexOf(arr[head]), 0, arr[i]);
      head = arr[i];
    } else {
      head = arr[i];
      sortedArray.unshift(arr[i])
    }
  }

  return sortedArray;
};

console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
// console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
// console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], d => d.x));// [{"x": -1}, {"x": 0}, {"x": 1}]
// console.log(sortBy([[3, 4], [5, 2], [10, 1]]), x=> x[1]);