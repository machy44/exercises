/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let collect = {};
  for (const element of nums) {
    collect[element] ? (collect[element] += 1) : (collect[element] = 1);
  }

  for (const key in collect) {
    if (collect[key] === 1) return key;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
