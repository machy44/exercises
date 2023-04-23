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

//binary search works only on already sorted array.
var binarySearchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2); // always gives the lower mid
    if (target > nums[mid]) {
      low = mid + 1; // no way mid is a valid option
    } else {
      high = mid; // it might be possibe to inseart @ mid
    }
  }
  return low;
};

// console.log(binarySearchInsert([1, 3, 5, 6], 5)); // 2
// console.log(binarySearchInsert([1, 3, 5, 6], 2)); // 1
console.log(binarySearchInsert([1, 3, 5, 6], 7)); // 4
