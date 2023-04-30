// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// submitted answer but I dont like it. too lengthy and mutating the input
var addBinary = function (a, b) {
  const equilizeLength = () => {
    if (a.length > b.length) {
      const diff = a.length - b.length;
      for (let index = 0; index < diff; index++) {
        b = '0' + b;
      }
    } else if (b.length > a.length) {
      const diff = b.length - a.length;
      for (let index = 0; index < diff; index++) {
        a = '0' + a;
      }
    }
  };
  equilizeLength();
  let res = '';
  let carryOver = '0';
  for (let i = a.length - 1; i >= 0; i--) {
    if (carryOver === '0') {
      if (a[i] === '1' && b[i] === '1') {
        res = '0' + res;
        carryOver = '1';
        continue;
      }
      if ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) {
        res = '1' + res;
        carryOver = '0';
        continue;
      }
      if (a[i] === '0' && b[i] === '0') {
        res = '0' + res;
        carryOver = '0';
        continue;
      }
    }

    if (carryOver === '1') {
      if (a[i] === '1' && b[i] === '1') {
        res = '1' + res;
        carryOver = '1';
        continue;
      }
      if ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) {
        res = '0' + res;
        carryOver = '1';
        continue;
      }
      if (a[i] === '0' && b[i] === '0') {
        res = '1' + res;
        carryOver = '0';
        continue;
      }
    }
  }
  return carryOver === '1' ? carryOver + res : res;
};

console.log(addBinary('11', '1')); // 100
console.log(addBinary('1010', '1011')); // 10101
