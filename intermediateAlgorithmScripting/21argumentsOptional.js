/*https://www.freecodecamp.org/challenges/arguments-optional
Create a function that sums two arguments together.
If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

*/


function addTogether() {
  if(arguments.length<2) {
    var x = (arguments[0]);
      return function(y){
        return x + y;
      };
  }
  if(Number.isInteger(arguments[0]) === false|| Number.isInteger(arguments[1]) === false){
    return undefined;
  } else {
    return arguments[0] + arguments[1];
  }

}

console.log(
addTogether(2,3),
addTogether(2)(3)
);
//OTHER solutions
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-arguments-optional/14271
