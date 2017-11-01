/*
https://www.freecodecamp.org/challenges/sum-all-primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime..
sumPrimes(10) should return 17
sumPrimes(977) should return 73156
*/

function sumPrimes(num) {
  let numbersArr = [];
  let primeNumbers = [];
  let counterOfDividing = 0;
  for(let i=2; i<=num; i++){
    numbersArr.push(i);
      if(i===2) primeNumbers.push(i);
      else {
        counterOfDividing = 0;
        for(let j=i-1; j>1;j--){
          if(i%j===0) counterOfDividing=counterOfDividing+1;
        }
      }
    if(counterOfDividing === 0 && i !== 2) primeNumbers.push(i);
  };
  return primeNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });
}

//console.log(sumPrimes(3));
//console.log(sumPrimes(4));
//console.log(sumPrimes(5));
console.log(sumPrimes(10));
console.log(sumPrimes(977));
//============================others interesting solution=======================================
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-sum-all-primes/16085
