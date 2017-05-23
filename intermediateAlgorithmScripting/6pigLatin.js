function translatePigLatin(str) {
  //first solution
 //var vowels = /^[aeiou]$/i;
 //if(!vowels.test(str.charAt(0))) return str.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + 'ay';
//  else return str + 'way';
//second solution
  var vowels = /^[aeiou]$/i;
  console.log(str.substr(0,1));
  if(!vowels.test(str.charAt(0))) return str.substr();
  else return str + "way";

  return result;
}
console.log(
translatePigLatin("consonant") //+ '\n' +
//translatePigLatin("algorithm") + '\n'+
//translatePigLatin("glove")
);
