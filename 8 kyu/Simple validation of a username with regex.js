// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

function validateUsr(username) {
  re = /^[a-z0-9_]{4,16}$/g;
  return re.test(username);
}

console.log(validateUsr('asddsa')); // true
console.log(validateUsr('a')); // false