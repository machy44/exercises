/*https://www.freecodecamp.org/challenges/steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
*/

function steamrollArray(arr) {
  var newArr = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      console.log('polje je: ', arr[i]);
      for (var j = 0; j < arr[i].length; j++) {
        console.log('u drugoj for petlji ', arr[i]);
        if (Array.isArray(arr[i][j]) === false) {
          console.log('u ifu u drugoj for petlji: ', arr[i][j]);
          newArr.push(arr[i][j]);
        } else {
          for (var d = 0; d < arr[i][j].length; d++) {
            console.log('treca for petlja: ', arr[i][j][d][0]);
            newArr.push(arr[i][j][d][0]);
          }
        }
      }
    } else {
      newArr.push(arr[i]);
    }

    console.log('newArr prilikom povecanja i: ', newArr);
  }

  return newArr;
}

console.log(
  steamrollArray([1, {}, [3, [[4]]]])
);

//Other solution
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-steamroller/16079
