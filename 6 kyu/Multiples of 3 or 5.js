// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0) {
    return 0;
  }
  const set = new Set();
  for (let i = 3; i < number; i += 3) {
    set.add(i);
  }
  for (let i = 5; i < number; i += 5) {
    set.add(i);
  }
  let result = 0;
  for (let el of set) {
    result += el;
  }
  return result;
}