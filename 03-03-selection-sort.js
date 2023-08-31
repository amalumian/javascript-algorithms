"use strict";

const array = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];
let count = 0;

function findSmallestIndex(array) {
  let smallestElement = array[0];
  let smallestIndex = 0;
  let arrayLen = array.length;

  for (let i = 0; i < arrayLen; i++) {
    count += 1;

    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function recursiveSelectionSort(array) {
  if (!array.length) {
    return [];
  }

  let smallestElement = array.splice(findSmallestIndex(array), 1);
  return smallestElement.concat(recursiveSelectionSort(array));
}

console.log("O(n * n)");
console.log("Length =", array.length);
console.log("Result =", recursiveSelectionSort(array));
console.log("Count =", count);
