// https://www.codewars.com/kata/570523c146edc287a50014b1

function numberJoy(n) {
  const digits = n.toString().split('');
  let digitsSum = 0;
  let reversedDigitsSum;
  let isHarshad;

  for (let d of digits) {
    digitsSum += +d;
  }
  if (digitsSum.toString().length > 1) {
    reversedDigitsSum = +(digitsSum.toString()[1] + digitsSum.toString()[0]);
  } else {
    reversedDigitsSum = digitsSum;
  }
  isHarshad = n % digitsSum === 0;
  console.log({
    isHarshad,
    digitsSum,
    reversedDigitsSum
  })

  return isHarshad && (digitsSum * reversedDigitsSum === n);
}

console.log(numberJoy(1));
console.log(numberJoy(1729));
console.log(numberJoy(3475));