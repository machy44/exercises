// https://leetcode.com/problems/date-range-generator/

/**
 * @param {string} start
 * @param {string} end
 * @param {number} step
 * @yields {string}
 */
var dateRangeGenerator = function* (start, end, step) {
  yield start;
  let nextDay = new Date(
    new Date(start).getTime() + 24 * step * 60 * 60 * 1000
  );
  while (nextDay.getTime() <= new Date(end).getTime()) {
    yield nextDay.toISOString().slice(0, 10);
    nextDay = new Date(
      new Date(nextDay).getTime() + 24 * step * 60 * 60 * 1000
    );
  }
};

const g = dateRangeGenerator('2023-04-01', '2023-04-04', 1);
console.log(g.next().value); // '2023-04-01'
console.log(g.next().value); // '2023-04-02'
console.log(g.next().value); // '2023-04-03'
console.log(g.next().value); // '2023-04-04'
console.log(g.next().done); // true
