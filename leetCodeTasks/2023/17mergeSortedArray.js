// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let rightPointer = n - 1;
  let leftPointer = m - 1;
  let currentPosition = m + n - 1;
  while (currentPosition >= 0) {
    if (nums2[rightPointer] >= nums1[leftPointer] || leftPointer < 0) {
      nums1[currentPosition] = nums2[rightPointer];
      rightPointer--;
    } else if (nums1[leftPointer] > nums2[rightPointer]) {
      nums1[currentPosition] = nums1[leftPointer];
      nums1[leftPointer] = 0;
      leftPointer--;
    }
    currentPosition--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
