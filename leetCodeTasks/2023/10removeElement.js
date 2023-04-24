// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; ) {
    const element = nums[i];
    if (element === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5;
