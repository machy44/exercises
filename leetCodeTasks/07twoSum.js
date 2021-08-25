// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const base = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const addend = nums[j];
      if (base + addend === target) return [i, j];
    }
  }

  return nums;
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
