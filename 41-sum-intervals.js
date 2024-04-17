const sumIntervals = (intervals) => {
  const values = [];

  for (const [begin, end] of intervals) {
    for (let value = begin; value < end; value += 1) {
      if (!values.includes(value)) {
        values.push(value);
      }
    }
  }

  return values.length;
}

console.log(sumIntervals([
   [1, 5],
   [-30, 19],
   [1, 7],
   [16, 19],
   [5, 100]
])); // 130

