// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = (n) => n.toString().split('').map(Number).sort((a, b) => b - a).join('');

console.log(descendingOrder(23514));