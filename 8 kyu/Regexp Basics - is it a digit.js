// https://www.codewars.com/kata/567bf4f7ee34510f69000032

String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};

console.log('2'.digit()); // true
console.log(''.digit()); // false
console.log('12'.digit()); // false
console.log('a'.digit()); // false
console.log('1s'.digit()); // false