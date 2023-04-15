// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Rabin–Karp algorithm
// https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
// https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let occurence = -1;
  let needleLength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let substring = '';
    for (let j = 0; j < needleLength; j++) {
      substring += haystack[j + i];
    }
    if (needle === substring) {
      occurence = i;
      break;
    }
  }
  return occurence;
};

// console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('hello', 'll'));
