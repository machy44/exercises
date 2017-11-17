/*https://www.freecodecamp.org/challenges/finders-keepers
Create a function that looks through an array (first argument) and
returns the first element in the array that passes a truth test
(second argument).

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })should return undefined

*/

function findElement(arr, func) {
   var num = arr.filter(function(element){
    if(func(element)===true){
      return element;
    }
  });
  return num[0];
}
console.log(
findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; })
);


//OTHER solution
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-finders-keepers/16016
