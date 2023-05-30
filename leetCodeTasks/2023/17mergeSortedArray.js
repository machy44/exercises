// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let looping = m >= n ? m : n;
  for (let i = 0; i < looping; i++) {
    if (nums2[i] <= nums1[i]) {
      nums1.splice(i, 0, nums2[i]);
    } else if (nums1[i] <= nums2[i]) {
      nums1.splice(i + 1, 0, nums2[i]);
    }
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0);
// merge([], 0, [1], 1);
