
function myReplace(str, before, after) {
  if(/^[A-Z]/.test( before ))  after = after.charAt(0).toUpperCase() + after.slice(1);

  return str.replace(before, after);

}

console.log(
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") + '\n' +
myReplace("This has a spellngi error", "spellngi", "spelling") + '\n' +
myReplace("His name is Tom", "Tom", "john") + '\n' +
myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
