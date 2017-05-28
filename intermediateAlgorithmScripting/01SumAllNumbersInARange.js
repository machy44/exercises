function sumAll(arr) {
    var maxNum = Math.max(...arr);
    var minNum = Math.min(...arr);
    var minAndMax = [];
    for (var i = minNum; i <= maxNum; i++) {
      minAndMax.push(i);
    }

  return minAndMax.reduce(function(accumulator,currentValue){
      return accumulator+currentValue;
  })
}
console.log(
sumAll([1, 4])
);
