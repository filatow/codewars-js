// https://www.codewars.com/kata/56a946cd7bd95ccab2000055

function lowercaseCount(str){
  return (str.match(/[a-z]/g) || []).length;
}

const s = "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~";
console.log(lowercaseCount(s));