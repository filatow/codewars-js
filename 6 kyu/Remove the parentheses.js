// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8
function removeParentheses(s) {
  const pattern = /\([^()]*\)/gm;
  while (s.indexOf('(') !== -1) {
    s = s.replace(pattern, '');
  }
  return s;
}

const s1 = 'example(unwanted thing)example';
const s2 = 'example (unwanted thing) example';
const s3 = 'hello example (words(more words) here) something';
const s4 = '(first group) (second group) (third group)';
const s5 = 'a (bc d)e';
const s6 = 'a(b(c))';

const r1 = removeParentheses(s1);
const r2 = removeParentheses(s2);
const r3 = removeParentheses(s3);
const r4 = removeParentheses(s4);
const r5 = removeParentheses(s5);
const r6 = removeParentheses(s6);
console.log({
  r1, r2, r3, r4, r5, r6
})