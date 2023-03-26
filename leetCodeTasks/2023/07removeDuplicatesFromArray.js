// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentNumber = nums[0];
  let firstPositionOfTheCurrentNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentNumber === nums[i]) {
      continue;
    } else {
      nums[firstPositionOfTheCurrentNumber + 1] = nums[i];
      currentNumber = nums[i];
      firstPositionOfTheCurrentNumber = firstPositionOfTheCurrentNumber + 1;
    }
  }

  nums.splice(firstPositionOfTheCurrentNumber + 1, nums.length);

  return firstPositionOfTheCurrentNumber + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5
