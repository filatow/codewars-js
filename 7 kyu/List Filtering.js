// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
  return l.filter(el => typeof el === 'number');
}


console.log(filter_list([1, 2, '3', 4, 'sss', 123, '5']));