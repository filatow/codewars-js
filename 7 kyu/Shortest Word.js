// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  return s.split(' ').reduce(
    (shortest, val) => (val.length < shortest) ? val.length : shortest,
    100
  );
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3