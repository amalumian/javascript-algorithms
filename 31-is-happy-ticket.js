const isHappyTicket = (ticket) => {
  let balance = 0;

  for (let i = 0, j = ticket.length - 1; i < j; i += 1, j -= 1) {
    balance += +ticket[i] - +ticket[j];
  }

  return balance === 0;
}

isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true

