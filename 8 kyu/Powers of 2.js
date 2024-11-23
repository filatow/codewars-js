// https://www.codewars.com/kata/57a083a57cb1f31db7000028

const powersOfTwo = (n) => new Array(n + 1).fill(2).map((val, idx) => val**idx);

console.log(powersOfTwo(0));
console.log(powersOfTwo(2));
console.log(powersOfTwo(5));
