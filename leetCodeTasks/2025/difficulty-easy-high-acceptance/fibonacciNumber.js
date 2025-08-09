// https://leetcode.com/problems/fibonacci-number/


const fibonacci = (number) => {
  if(number === 0) return 0;
  if(number === 1) return 1;

  return fibonacci(number - 2) + fibonacci(number  - 1);

}


// console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

