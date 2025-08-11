// https://leetcode.com/problems/fibonacci-number/


// with recursion
// const fibonacci = (number) => {
//   if(number === 0) return 0;
//   if(number === 1) return 1;

//   return fibonacci(number - 2) + fibonacci(number  - 1);

// }

const fibonacci = (number) => {
  if(number === 0 ) return 0;
  if(number === 1 ) return 1; 
  const sequence = [0, 1];

  for (let i = 2; i <= number; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence[number];
};

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1  
// console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13

// with loop

