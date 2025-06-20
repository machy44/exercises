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

// with JSON.stringify is kind of hacky

// This is the solution without it
// class ArrayWrapper {
//   constructor(nums) {
//     this.nums = nums;
//   }

//   valueOf() {
//     let sum = 0;
//     for (let i = 0; i < this.nums.length; i++) {
//       sum += this.nums[i];
//     }
//     return sum;
//   }

//   toString() {
//     let str = '[';
//     for (let i = 0; i < this.nums.length; i++) {
//       str += this.nums[i];
//       if (i !== this.nums.length - 1) {
//         str += ',';
//       }
//     }
//     str += ']';
//     return str;
//   }
// }