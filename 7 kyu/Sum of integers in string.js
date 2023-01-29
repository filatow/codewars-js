// https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s){
  const matches = s.match(/\d+/g);
  return matches ?
    matches.reduce((acc,cur) => acc += Number(cur), 0)
    :
    0;
}


console.log(sumOfIntegersInString("s1sd50axc;!200sadf;l2l;7"));
console.log(sumOfIntegersInString("axc;!ll;"));
