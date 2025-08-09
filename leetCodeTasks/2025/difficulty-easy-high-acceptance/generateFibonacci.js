// https://leetcode.com/problems/generate-fibonacci-sequence/description/

/**
 * @return {Generator<number>}
 */
// var fibGenerator = function* (count) {
//   if (count === 0) return;
//   let sequence = [];
//   for (let i = 0; i < count; i++) {
//     if (i === 0) {
//       yield 0;
//       sequence.push(0);
//     } else if (i === 1) {
//       yield 1;
//       sequence.push(1);
//     } else {
//       sequence.push(sequence[i - 2] + sequence[i - 1]);
//       yield sequence[i];
//     }
//   }
// };


// const gen = fibGenerator(8);
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 8
// console.log(gen.next().value); // 13

// count cant be send as argument

// var fibGenerator = function* () {
//   let i = 0;
//   let sequence = [0, 1];

//   while (true) {
//     if (i === 0) {
//       yield 0;
//       i++;
//     } else if (i === 1) {
//       yield 1;
//       i++;
//     } else {
//       sequence.push(sequence[i - 2] + sequence[i - 1]);
//       yield sequence[i];
//       i++;
//     }
//   }
// };

// third solution without array;

var fibGenerator = function* () {
  let prev = 0;
  let now = 1

  while (true) {
    yield prev;
    let temp = now;
    now = prev + now;
    prev = temp;
  }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
console.log(gen.next().value); // 13
