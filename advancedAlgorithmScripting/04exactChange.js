//https://www.freecodecamp.org/challenges/exact-change
/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
 Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

denomination = [
  { name: 'ONE HUNDRED', value: 100.00 },
  { name: 'TWENTY', value: 20.00 },
  { name: 'TEN', value: 10.00 },
  { name: 'FIVE', value: 5.00 },
  { name: 'ONE', value: 1.00 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.10 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let howManyCash = 0;
  for( prop in cid) {
    howManyCash += cid[prop][1];
  }
  howManyCash = howManyCash.toFixed(2);
  if(howManyCash < change) return "Insufficient Funds";
  else if(howManyCash === change) return "Closed";

  cid = cid.reverse();
  
  let rest = denomination.reduce(function(acc, next, index){
      if (change >= next.value) {
        let currentVal = 0;
        while( change >= next.value && cid[index][1] >= next.value) {
          currentVal += next.value;
          change -= next.value;
          // change.toFixed(2);
          cid[index][1] -= next.value;
        }
        acc.push([next.name, currentVal]);
        return acc;
      } else {
        return acc;
      }
  }, []);
  return rest;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

//other solutions 
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-exact-change