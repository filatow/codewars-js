// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  return ms = str.match(/[aieou]{1}/g), ms ? ms.length : 0;
}


console.log(getCount('addseiuossi')); // 6