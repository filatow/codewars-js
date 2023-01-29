// https://www.codewars.com/kata/596343a24489a8b2a00000a2

function isItANum(str) {
  str = str.replace(/[^\d]/g, '');
  if (str.startsWith('0') && str.length === 11) {
    return str;
  }
  return "Not a phone number";
}