"use strict";

const array = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let less = array.slice(1).filter((el) => el <= pivot);
  let greater = array.slice(1).filter((el) => el > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log("O(n * log n)");
console.log("Length =", array.length);
console.log("Result =", quickSort(array));
