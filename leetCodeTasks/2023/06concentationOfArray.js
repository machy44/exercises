// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let concatedArr = [];
  const len = nums.length;
  nums.forEach((number, index) => {
    concatedArr[index] = number;
    concatedArr[index + len] = number;
  });

  return concatedArr;
};

// console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
