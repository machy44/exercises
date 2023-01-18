// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = {};

  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    const element2 = strs[i + 1];

    if (element2 === undefined) {
      break;
    }

    for (let j = 0; j < element.length; j++) {
      if (element[j] === element2[j]) {
        if (prefix[element[j]] === undefined) {
          prefix[element[j]] = 1;
        } else {
          prefix[element[j]] += 1;
        }
      } else {
        continue;
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
