// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let counters = new Map();
  for (let elem of A) {
    if (counters.has(elem)) {
      counters.set(elem, (counters.get(elem) + 1));
    } else {
      counters.set(elem, 1);
    }
  }
  for (let [key, value] of counters) {
    if (value % 2 !== 0) {
      return key;
    }
  }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));