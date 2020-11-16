// jednostavan algoritam za slaganje stringova unazad i napravi pseudokod

// dijagram, uzmi react router ...znaci nacrtaj block dijagram komponenti i njihovih veza i mozes flow dijagram. znaci to mogu biti 3 skice
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString("nesto"));

// recursion
// pseudokod
//  inverseString()
//  if there is no character left return "" to abort recursion call
//  take last character + call inverseString(string without last character)
function inverseString(str) {
  if (!str) return "";
  return str[str.length - 1] + inverseString(str.slice(0, str.length - 1));
}
console.log(inverseString("nesto"));
