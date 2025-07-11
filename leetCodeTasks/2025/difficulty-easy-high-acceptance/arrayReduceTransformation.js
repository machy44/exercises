// https://leetcode.com/problems/array-reduce-transformation/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
  if(!nums.length) return init;

  let acc = init;

  nums.forEach((num) => {
    acc = fn(acc, num);
  })

  return acc;
    
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0))