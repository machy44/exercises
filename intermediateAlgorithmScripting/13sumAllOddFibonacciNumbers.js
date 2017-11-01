/*
https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

*/
function sumFibs(num) {
  let limiter = arguments[0];
  let fib = [];
  for(let i=0; i<=num; i++){
    if(i===0) fib.push(0);
    if(i===1 || i===2) fib.push(1);
    if(i>2) fib.push(fib[fib.length-1]+fib[fib.length-2]);
   }
    return fib.filter((element) => {
      if(element%2 !== 0 && element <= limiter) return  element;
    }).reduce((sum, value)=> { return sum + value; });
}
console.log(
  sumFibs(3),
  sumFibs(10),
  sumFibs(75024),
  sumFibs(75025)
);

/* OTHERS INTERESTING SOLUTIONS
function sumFibs(num) {
  var newNum = 0;
  var prevNum = 1;
  var sum = 0;
  for (var i = 1; i <= num; i = newNum) {
    newNum += prevNum;
    prevNum = i;
    if (prevNum % 2 !== 0) {
      sum += prevNum;
    }
  }
  return sum;
}
--------------------------------------------------------------------------
function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}

// test here
sumFibs(4);

*/
