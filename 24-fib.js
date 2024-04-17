const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib(3);  // 2
fib(5);  // 5
fib(10); // 55

