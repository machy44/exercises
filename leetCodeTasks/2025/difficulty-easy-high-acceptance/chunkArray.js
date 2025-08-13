// https://leetcode.com/problems/chunk-array/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {

  const chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    const temp = [];
    for (let j = 0; j < size; j++) {
      if (arr[i + j]) {
        temp.push(arr[i + j]);
      }
    }
    chunked.push(temp);
  }
  return chunked;

};

// arr = [1,2,3,4,5], size = 1
// console.log(chunk([1,2,3,4,5], 1));
// [[1],[2],[3],[4],[5]]
// console.log(chunk([1, 9, 6, 3, 2], 3)); // [[1,9,6],[3,2]]
console.log(chunk([8,5,3,2,6], 6)); //[[8,5,3,2,6]]