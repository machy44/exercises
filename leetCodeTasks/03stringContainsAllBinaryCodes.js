//leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let elements = new Set();
  for (var i = 0; i <= s.length - k; i++) {
    elements.add(s.substring(i, i + k));
  }

  return elements.size === Math.pow(2, k);
};

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("00110", 2));
console.log(hasAllCodes("0000000001011100", 4));
console.log(hasAllCodes("00110110", 2));
