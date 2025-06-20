// https://leetcode.com/problems/array-wrapper/description/

/**
 * @param {number[]} nums
 * @return {void}
 */
function ArrayWrapper(nums) {
  this.nums = nums;
}

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, num) => {
    return acc += num;
  }, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums)
};


const obj1 = new ArrayWrapper([1, 2]);
console.log(typeof String(obj1)); // "[1,2]"
// console.log(obj1);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
String(obj2); // "[3,4]"