/*https://www.freecodecamp.org/challenges/steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
*/
function steamrollArray(arr) {
  // I'm a steamroller, baby
  console.log('arr ulazak u funkciju: ', arr);
  var newArr = [];
  var i = 0;
  for (; i < arr.length; i++) {
    if (Array.isArray(arr[i]) == false) {
      newArr.push(arr[i]);
      console.log('arr[i] u prvom foru: ', arr[i]);
      console.log('newArr u prvom foru ', newArr);
    } else {
      console.log('u elseu:------------------------------');
      console.log('arr[i] prije drugog fora: ', arr[i]);
      console.log('newArr prije drugog fora ', newArr);
      for (var j = 0; j < arr[i].length; j++) {
        console.log('arr[i][j] u drugom foru: ', arr[i][j]);
        newArr.push(arr[i][j]);
        console.log('newArr nakon pusha: ', newArr);
        console.log('arr nakon newArr pusha: ', arr);
        if (Array.isArray(arr[i][j]) === true) {
          steamrollArray(newArr);
        }
      };
    }
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//console.log('\n'),
//console.log(steamrollArray([1, [], [3, [[4]]]]));
//Other solution
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-steamroller/16079
