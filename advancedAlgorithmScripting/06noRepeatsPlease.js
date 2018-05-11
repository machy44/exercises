/*https://www.freecodecamp.org/challenges/no-repeats-please
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/
function permAlone(str) {
  var arr =str.split('');
  var count = 0;
  
  function swap(a, b) {
    var tmp = arr[a];
    arr[a] =arr[b];
    arr[b] = tmp;
  }
  
  function generate(n) {
    var regex = /([a-z])\1+/;
    if(n==1 && !regex.test(arr.join(''))){
      count +=1;
    } else {
      for(var i=0; i!==n; i++) {
        generate(n-1);
        swap(n%2 ? 0 : i, n-1);
      }
    }
  }
  generate(arr.length);
  return count;
}

console.log(
permAlone('aab'));

  //other solutions
  //https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-no-repeats-please/16037