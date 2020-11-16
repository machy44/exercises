//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {
  let reversed = "";
  for (let i in str) {
    if (!reversed) reversed = reversed.concat(str[i]);
    else {
      reversed = str[i] + reversed;
    }
  }
  return reversed;
}

console.log(reverseString("hello"));

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
