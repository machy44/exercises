// https://leetcode.com/problems/to-be-or-not-to-be/description/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {

  return ({
    toBe: (checkVal) => {
      if (checkVal === val) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: (checkVal) => {
      if (checkVal !== val) {
        return true;
      }
      throw new Error("Equal");
    }
  });
};

/**
 * 
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5)); // true