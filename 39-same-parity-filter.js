const isEven = (num) => num % 2 === 0;

const sameParity = (coll) => {
  const firstEl = coll[0];

  return coll.filter((el) => isEven(el) === isEven(firstEl));
};

sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // []

