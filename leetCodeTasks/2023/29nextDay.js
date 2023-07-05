// https://leetcode.com/problems/next-day/

Date.prototype.nextDay = function () {
  let date = new Date(this.valueOf() + 86400000);
  return date.toISOString().split('T')[0];
};

const date = new Date('2014-06-20');
console.log(date.nextDay()); // "2014-06-21"
