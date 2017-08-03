/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

*/
//MY SOLUTION - this solution would work with multidimensional array
//if we had an uniteUnique([1, 3, 2], [1, [5,1]], [2, [4]])
//which will give me [1,3,2, [5,1], 4] but it did pass a test cause they give you 2d array. solution is not optimal.
//i dont like this solution cause I' m using only for loops
/*
function uniteUnique(arr) {
  const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

  for(i=0; i < args.length; i++){
    for(j=0; j < args[i].length; j++){
      if(!arr.includes(args[i][j])) arr.push(args[i][j]);
    }
  }

  return arr;
}*/

//HINT solution // adnaced solution
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  console.log(concatArr);
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

console.log(
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]])
);
