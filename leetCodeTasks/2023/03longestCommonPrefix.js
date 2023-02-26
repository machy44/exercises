// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let tempPref = '';
    for (let j = 0; j < prefix.length; j++) {
      if (strs[i][j]) {
        if (strs[i][j] === prefix[j]) {
          tempPref += prefix[j];
        } else {
          break;
        }
      } else {
        break;
      }
    }
    prefix = tempPref;
  }

  return prefix;
};

console.log(longestCommonPrefix(['cir', 'car']));
