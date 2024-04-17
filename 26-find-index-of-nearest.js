const findIndexOfNearest = (coll, num) => {
  if (coll.length === 0) {
    return null;
  }

  return coll
    .reduce((acc, el, i, arr) => {
      if (Math.abs(el - num) < Math.abs(arr[acc] - num)) {
        return i;
      }

      return acc;
    }, 0);
};

findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2

