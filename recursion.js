"use strict";

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("Factorial =", factorial(5));

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log("Fibonachi =", fibonachi(8));

function sumRecursive(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
}

console.log("Sum recursive=", sumRecursive([1, 2, 3, 4]));

function recursiveCout(arr) {
  if (arr.length === 0) return 0;
  return 1 + recursiveCout(arr.slice(1));
}

console.log("Recursive count", recursiveCout([1, 2, 3, 4]));
