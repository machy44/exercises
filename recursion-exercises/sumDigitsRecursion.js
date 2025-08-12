// Write a recursive function in JavaScript called sumDigits that:

// Takes a positive integer as input.

// Returns the sum of all its digits.

// my solution with conversing between string and number which I dont like
// const sumDigits = (number) => {
//   let sum  = 0;
//   for (let i = 0; i < String(number).length; i++) {
//     sum += Number(String(number)[i]);
//   }

//   return sum;
// }

// const sumDigits = (number) => {
//   let sum = 0;
//   while (number > 0) {
//     // So % 10 always gives you the ones place (last digit) of an integer.
//     sum += number % 10;
//     // 1234 / 10 = 123.4
//     // Math.floor(123.4) = 123   // last digit removed
//     number = Math.floor(number / 10);
//   }

//   return sum;
// };

// sumDigits with recursion

// const sumDigits = (number) => {
//   // Base case: single-digit number
//   if (number < 10) return number;
//   let sum = number % 10 + sumDigits(Math.floor(number / 10));
//   return sum;
// };

// // console.log(sumDigits(1234)); // → 10  (1 + 2 + 3 + 4)
// // console.log(sumDigits(9));    // → 9
// console.log(sumDigits(2025)); // → 9  (2 + 0 + 2 + 5)




