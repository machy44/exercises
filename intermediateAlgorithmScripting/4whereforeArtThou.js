
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(value){

    for (let i in  source) {
    //  console.log(source);
        if (source[i] !== value[i]) {
          return false;
      }
  }
    return true;
});
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: 'Capulet' },
  { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
 );

 //whatIsInAName([{ "a": 1, "b": 2 }, { "a": 5 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
