const chunk = (arr, chunkSize) => {
  const chunkedArr = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArr.push(arr.slice(i, i + chunkSize));
  }

  return chunkedArr;
};

chunk(["a", "b", "c", "d"], 3);
// [['a', 'b', 'c'], ['d']]

