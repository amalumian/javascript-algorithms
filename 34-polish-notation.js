const calcInPolishNotation = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const stack = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isFinite(arr[i])) {
      stack.push(arr[i]);
    } else {
      const a = stack.pop();
      const b = stack.pop();

      if (arr[i] === "+") {
        stack.push(a + b);
      } else if (arr[i] === "-") {
        stack.push(b - a);
      } else if (arr[i] === "*") {
        stack.push(a * b);
      } else if (arr[i] === "/") {
        if (a === 0) {
          return null;
        }

        stack.push(b / a);
      }
    }
  }

  if (stack.length > 1) {
    return null;
  }

  return stack[0];
};

console.log(calcInPolishNotation([7, 2, 3, "*", "-"]));

