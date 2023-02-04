// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  const arrWOZeros = arr.filter(el => el !== 0);
  const arrZeros = Array.from('0'.repeat(arr.length - arrWOZeros.length)).map(Number);
  return arrWOZeros.concat(arrZeros);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));