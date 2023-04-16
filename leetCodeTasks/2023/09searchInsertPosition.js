// https://leetcode.com/problems/search-insert-position/
// binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// this works but it is O(n) take a look about binary search
var searchInsert = function (nums, target) {
  let insertIndex = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element >= target) {
      insertIndex = i;
      break;
    }
  }
  return insertIndex;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
