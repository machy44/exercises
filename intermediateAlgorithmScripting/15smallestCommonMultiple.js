/*
https://www.freecodecamp.org/challenges/smallest-common-multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  if(arr[0]>arr[1]) var bigger = arr[0], smaller = arr[1];
  else var bigger = arr[1], smaller = arr[0];
  var valueOfBigger = bigger;
  var arrOfNumbers = [];
  for(var i=smaller; i<=bigger; i++){
    arrOfNumbers.push(i);
  }
  for(var j=0; j<arrOfNumbers.length;){
      if(bigger%arrOfNumbers[j]===0) j++;
    	else {
        bigger+=valueOfBigger;
        j=0;
      }
  }

  return bigger;
}

console.log(
//smallestCommons([1,5]),
//smallestCommons([3,5]),
//smallestCommons([4,5])
//smallestCommons([1, 13])
smallestCommons([23, 18])
);
//other solutions
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-smallest-common-multiple/16075
