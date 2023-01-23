// https://www.codewars.com/kata/52fba66badcd10859f00097e

export class Kata {
  static disemvowel(str: string): string {
    const re = /[^aeiou]/gi;
    const matches = str.match(re) || [];
    return matches.join('');
  }
}


const testStr = 'This website is for losers LOL!';
console.log(Kata.disemvowel(testStr));