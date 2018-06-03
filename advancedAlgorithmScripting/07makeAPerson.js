/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.


*/
var Person = function(firstAndLast) {
  let first = firstAndLast.split(' ')[0];
  let last = firstAndLast.split(' ')[1]

  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return first + ' ' + last;
  };

  this.setFirstName = function(name) {
    first = name;
  };

  this.setLastName = function(name) {
    last = name;
  };

  this.setFullName = function(name) {
    first = name.split(' ')[0];
    last = name.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

var bob = new Person('Bob Ross');
bob.getFullName();


// Other solutions
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-make-a-person/16020