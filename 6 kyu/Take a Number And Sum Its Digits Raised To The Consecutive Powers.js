// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  const output = [];
  for (let number = a; number <= b; number++) {
    const digits = [];
    let n = number;
    while (n > 0) {
      digits.push(n % 10);
      n = Math.floor(n / 10);
    }

    digits.reverse();
    n = 0;

    for (let i = 0; i < digits.length; i++) {
      n += digits[i] ** (i + 1);
    }

    if (n === number) {
      output.push(number);
    }
  }

  return output;
}


console.log(sumDigPow(80, 150));