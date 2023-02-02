function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }
  const arr = rangeOfNumbers(startNum + 1, endNum);
  arr.unshift(startNum);
  return arr;
};

console.log(rangeOfNumbers(2, 5));
console.log(rangeOfNumbers(3, 3));