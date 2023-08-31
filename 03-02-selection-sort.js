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

  for (let i = 0; i < array.length; i++) {
    count += 1;

    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(array) {
  const sortedArray = [];
  const copyArray = array.slice();
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallestIndex(copyArray);

    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

console.log("O(n * n)");
console.log("Length =", array.length);
console.log("Result =", selectionSort(array));
console.log("Count =", count);
