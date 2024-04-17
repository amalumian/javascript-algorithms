const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const size1 = arr1.length;
  const size2 = arr2.length;

  let i1 = 0;
  let i2 = 0;
  const result = [];

  while (i1 < size1 && i2 < size2) {
    const lastCommon = result.at(-1);
    const item1 = arr1[i1];
    const item2 = arr2[i2];

    if (item1 === item2 && item1 !== lastCommon) {
      result.push(item1);
      i1 += 1;
      i2 += 1;
    } else if (item1 > item2) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }

  return result;
};

