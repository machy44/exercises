function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  //my solution --it worked but is not good
  //let booleanPrimitives = [null, 0, -0, false, undefined, "", true];
  //return Boolean(booleanPrimitives.includes(bool));
  return typeof bool === 'boolean';
  //Can be performed using the builtin Boolean Function
  // - only primitives remain equal to themselves with all other values converted to a booleans
  //return Boolean(bool)===bool;
}

console.log(
booWho(true),
booWho(null),
booWho(false),

booWho([1, 2, 3]),
booWho(NaN),
booWho(0)
);
