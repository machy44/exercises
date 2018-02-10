/*https://www.freecodecamp.org/challenges/inventory-update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 Update the current existing inventory item quantities (in arr1). 
 If an item cannot be found, add the new item and quantity into the inventory array.
  The returned inventory array should be in alphabetical order by item.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (let i = 0; i < arr1.length; i++) {
        arr2.map(function(element, index){
            if(arr1[i][1] === element[1]) {
                arr1[i][0] += element[0];
                arr2.splice(index, 1);
            }
        });
    }
    return arr1.concat(arr2).sort(function(a,b) {
        return a[1] > b[1] ? 1 : -1;        
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log(
updateInventory(curInv, newInv));

//other solutions
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-inventory-update/16019