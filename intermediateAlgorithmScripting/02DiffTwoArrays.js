function diffArray(arr1, arr2) {
  var newArr = arr1+arr2;
    arr1.filter(function(element){
        console.log(arr1);
        if(arr2.indexOf(element)>-1===false){
          newArr.push(element);
        }
    });
    arr2.filter(function(element){
        console.log(arr1);
        if(arr1.indexOf(element)>-1===false){
          newArr.push(element);
          }
    });
    return newArr;
  }
console.log(
diffArray([1, "calf", 3, "piglet"], [7, "filly"])
);
