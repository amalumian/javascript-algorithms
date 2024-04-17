const reverseInt = (num) => {
let result = "";
const numInStr = Math.abs(num).toString();

for (let i = 0; i < numInStr.length; i++) {
  result = numInStr[i] + result;
}

return num < 0 ? Number(-result) : Number(result);
}

console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321
console.log(reverseInt(8900)); // 98

