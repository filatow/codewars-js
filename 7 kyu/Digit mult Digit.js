// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  const digits = num.toString().split('');
  let result = '';
  for (let digit of digits) {
    result += (+digit) ** 2;
  }
  return +result;
}