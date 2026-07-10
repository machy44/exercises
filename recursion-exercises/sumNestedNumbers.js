// "Sum all numbers in an object that may contain nested objects and arrays" — it’s a real interview-style problem.

const sumNestedNumbers = (element) => {
  let sum = 0;

  for (const [key, value] of Object.entries(element)) {
    if (typeof value === "object") {
      sum += sumNestedNumbers(value);
    } else if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;

}


console.log(sumNestedNumbers({ a: 1, b: [2, { c: 3, d: "x" }, 4] })); // 10
console.log(sumNestedNumbers([1, 2, [3, [4, "hello"], 5]])); // 15
console.log(sumNestedNumbers({ x: { y: { z: 10 } }, w: 5 })); // 15
