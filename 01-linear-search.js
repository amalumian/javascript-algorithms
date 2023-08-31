"use strict";

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;

    if (array[i] === item) {
      return i;
    }
  }

  return -1;
}

console.log("O(n)");
console.log("Result =", linearSearch(array, 5));
console.log("Count =", count);
