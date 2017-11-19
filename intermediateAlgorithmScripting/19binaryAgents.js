/*https://www.freecodecamp.org/challenges/binary-agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010
01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101
00100000 01000110 01110010 01100101 01100101 01000011 01101111
 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/
function binaryAgent(str) {
  var strArr = str.split(" ");
  var words = '';
  for (var i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
    console.log(strArr.charCodeAt(i));
  }
  console.log(words);
}

console.log(
binaryAgent("01000001 01110010 01100101 01101110 00100111 \
01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 \
01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
);
//other solutions
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-binary-agents/14273
