// const compose_ = (f, g) => (a) => f(g(a));


const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
const plus38 = (c) => c + 38;
const div10 = (d) => d / 10;

const compose = (...funcs) => (a) => funcs.reduceRight((acc, func) => func(acc), a);

const compose_ = (...funcs) => (a) => {
  console.log(funcs);
  let calculatedValue = a;

  for (let i = funcs.length - 1; i >= 0; i--) {
    calculatedValue = funcs[i](calculatedValue);
  }
  return calculatedValue;
}

console.log(compose(div10, plus38, multTwo, addOne)(5));