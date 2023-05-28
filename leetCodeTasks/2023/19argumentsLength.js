// https://leetcode.com/problems/return-length-of-arguments-passed/

/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  console.log(args);
  return args.length;
  //   return Object.keys(arguments).length;
};

console.log(argumentsLength(1, 2, 3)); // 3
