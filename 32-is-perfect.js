const isPerfect = (n) => {
  let sum = 0;

  if (n === 0) {
    return false;
  }

  for (let i = Math.floor(n / 2); i > 0; i -= 1) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
};

isPerfect(6); // true
isPerfect(7); // false

