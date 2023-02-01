// https://www.codewars.com/kata/586909e4c66d18dd1800009b

function multiplyAll(arr) {
  return function(num) {
    const result = [];
    for (let n of arr) {
      result.push(n * num);
    }
    return result;
  }
}