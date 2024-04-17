const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0 ? 'Fizz' : '';
    const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
    console.log(`${hasFizz}${hasBuzz}` || i);
  }
};

fizzBuzz(10, 21);

