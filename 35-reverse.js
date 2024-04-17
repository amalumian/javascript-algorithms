const reverse = (str) => {
  if (str.length === 0) {
    return '';
  }

  return str.slice(-1) + reverse(str.slice(0, -1));
};

reverse('str');    // rts
reverse('hexlet'); // telxeh

