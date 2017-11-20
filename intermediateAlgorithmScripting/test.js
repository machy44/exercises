function steamrollArray(arr) {
  let flat = [].concat(...arr);
  console.log(flat.some());
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(
steamrollArray([1, [2], [3, [[4]]]])
);
