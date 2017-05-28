
function fearNotLetter(str) {
  let asciiNumber = [];
  for (var i = 0; i < str.length; i++) {
     asciiNumber.push(str.charCodeAt(i));
  }

  for (var i = 0; i < asciiNumber.length; i++) {
    if (asciiNumber[i+1] - asciiNumber[i] > 1) {
        return String.fromCharCode(asciiNumber[i] + 1);
    }
  }

  return undefined;
}

console.log(
fearNotLetter("bcd")
);
