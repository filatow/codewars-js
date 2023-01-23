// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

export class Kata {
  static validatePin(pin: string): boolean {
    const re: RegExp = /^\d{4}$|^\d{6}$/;
    return re.test(pin);
  }
}

console.log(Kata.validatePin('1234'));
console.log(Kata.validatePin('a234'));
console.log(Kata.validatePin('12345'));
console.log(Kata.validatePin('123456'));