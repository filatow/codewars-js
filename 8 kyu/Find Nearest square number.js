// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

function nearestSq(n) {
  let downN = n;
  let upN = n;
  
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  }

  while (true) {
    if (Math.sqrt(--downN) % 1 === 0) {
      return downN;
    }
    if (Math.sqrt(++upN) % 1 === 0) {
      return upN;
    }
  }
}

console.log(nearestSq(1));
console.log(nearestSq(26));
console.log(nearestSq(111));