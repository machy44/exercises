// https://leetcode.com/problems/design-hashset/

// this is example with class which would work in es6 as it works
//  with typescript
// class MyHashSet {
//   constructor() {}

//   add(key: number): void {}

//   remove(key: number): void {}

//   contains(key: number): boolean {}
// }

var MyHashSet = function () {
  this.data = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  for (let i = 0; i < this.data.length; i++) {
    if (key === this.data[i]) {
      return;
    }
  }
  this.data.push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.data.length; i++) {
    if (key === this.data[i]) {
      this.data.splice(i, 1);
    }
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  for (let i = 0; i < this.data.length; i++) {
    if (key === this.data[i]) {
      return true;
    }
  }
  return false;
};

MyHashSet.prototype.display = function (key) {
  console.log(this.data);
};

const bla = new MyHashSet();
bla.add(2);
bla.add(2);
bla.add(3);
bla.add(3);
bla.contains(3);
bla.display();
bla.remove(3);
bla.contains(3);
bla.display();

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
