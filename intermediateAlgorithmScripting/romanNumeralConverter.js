
function convertToRoman(num) {
  let roman = "";
  //solve that with object literal
  romanNumerals = ['I','IV', 'V', 'IX', 'X', 'XL', 'L', 'XC' ,'C',  'CD','D', 'CM', 'M'];
  decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900,  1000];


  for (let  = 12; i >= decimal.length-13; i--){
    while (num >= decimal[i]) {
      roman += romanNumerals[i];
     num -= decimal[i];
    }
 }

 return roman;

}
console.log(
convertToRoman(1984)
);
