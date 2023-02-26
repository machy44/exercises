// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let duplicates = {};
  for (let i = 0; i < nums.length; i++) {
    if (duplicates[nums[i]]) {
      duplicates[nums[i]] += 1;
    } else {
      duplicates[nums[i]] = 1;
    }
  }
  return Object.values(duplicates).some((element) => element > 1);
};
