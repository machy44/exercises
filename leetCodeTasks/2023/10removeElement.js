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

// i like this one without splice https://leetcode.com/problems/remove-element/solutions/430881/this-is-how-you-solve-all-in-pla

// I believe this is the right approach. Without splice but with two pointers
// https://leetcode.com/problems/remove-element/solutions/1189866/javascript-solution-two-pointers/
