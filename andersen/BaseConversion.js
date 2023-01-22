function convertAnyToDecimal(input, source) {
  let inputDigits = input.split('').reverse();
  let position = 0;
  let resultIn10 = 0;
  let sourceBase = source.length;

  for (digit of inputDigits) {
    resultIn10 += source.indexOf(digit) * Math.pow(sourceBase, position);
    position++;
  }

  return String(resultIn10);
}

function convertDecimalToAny(input, target) {
  let targetBase = target.length;
  let dividend = Number(input);
  let outputDigits = [];

  while (dividend >= targetBase) {
    outputDigits.push(target.charAt(dividend % targetBase));
    dividend = Math.floor(dividend / targetBase);
  }
  outputDigits.push(target.charAt(dividend));

  return outputDigits.reverse().join('');
}

function convert(input, source, target) {
  const resultInDec = convertAnyToDecimal(input, source);
  return convertDecimalToAny(resultInDec, target);
}

anyToAny('34670', '01234567', '0123') // 3212320