/*https://www.freecodecamp.org/challenges/everything-be-true
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

*/
 //|| isNaN(collection[i][pre])=== true

function truthCheck(collection, pre) {
  var falsy = [false, 0, "", null, undefined, NaN];

  for (var i in collection) {
    if(falsy.indexOf(collection[i][pre]) > -1 ) return false;
    if(Number.isNaN(collection[i][pre])) return false;
}
  // Is everyone being true?
  return true;
}
console.log(
 truthCheck([{"single": "double"}, {"single": NaN}], "single")
);
//OTHER solutions
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-everything-be-true/16011
