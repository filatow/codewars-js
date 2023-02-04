// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  const len = cc.toString().length;
  const maskedLen = len > 4 ? len - 4 : 0;
  return '#'.repeat(maskedLen) + cc.toString().slice(-4);
}

console.log(maskify(4556364607935616));
console.log(maskify(1));
console.log(maskify(11111));