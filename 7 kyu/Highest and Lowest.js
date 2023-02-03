// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  const nums = numbers.split(' ');
  let h_st = l_st = +nums[0];

  for (let num of nums) {
    if (Number(num) > h_st) h_st = Number(num);
    if (Number(num) < l_st) l_st = Number(num);
  }
  
  return `${h_st} ${l_st}`;
}