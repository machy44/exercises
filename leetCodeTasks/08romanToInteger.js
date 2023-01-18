// https://leetcode.com/problems/roman-to-integer/

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const subtraction = (first, second) => {
  if (second - first > 1 && second - first < 10) {
    return second - 1;
  }
  if (second - first > 9 && second - first < 100) {
    return second - 10;
  }
  if (second - first > 100 && second - first < 1000) {
    return second - 100;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let result = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    const nextElement = s[index + 1];

    if (symbols[element] < symbols[nextElement]) {
      result = result + subtraction(symbols[element], symbols[nextElement]);
      index++;
    } else {
      result = result + symbols[element];
    }
  }
  return result;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('IX'));
