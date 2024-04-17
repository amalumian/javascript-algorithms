const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = (num) => {
  let currentSum = num;

  for (let i = 0; i < 10; i += 1) {
    if (currentSum === 1) {
      return true;
    }

    currentSum = sumOfSquareDigits(currentSum);
  }

  return false;
}

/*
7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1. 
*/

