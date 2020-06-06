// my solution
// function returnBinary(number) {
//   let ostatak = number;
//   let binary = [];
//   while (ostatak > 0) {
//     binary.push(ostatak % 2);
//     ostatak = Math.floor(ostatak / 2);
//   }

//   return Number(binary.reverse().join(""));
// }

// console.log(returnBinary(5));
// console.log(returnBinary(8));
// console.log(returnBinary(256));

//better solution which I found
// function returnBinary(number) {
//   return Number(number.toString(2));
// }

// console.log(returnBinary(5));
// console.log(returnBinary(8));
// console.log(returnBinary(256));

// bitwise solution
