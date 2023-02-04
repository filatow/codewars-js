// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  str = str.toLowerCase();
  const strChars = str.split('');
  const uniqueStrChars = [];
  
  for (let char of strChars) {
    if (!uniqueStrChars.includes(char)) {
      uniqueStrChars.push(char);
    }
  }

  return strChars.length ===  uniqueStrChars.length;
}