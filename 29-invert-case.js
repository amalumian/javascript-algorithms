const invertCase = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toUpperCase() === str[i]) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }

  return result;
}

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js

