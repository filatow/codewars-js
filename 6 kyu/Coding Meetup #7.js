// https://www.codewars.com/kata/582887f7d04efdaae3000090

function findSenior(list) {
    const maxAge = list.reduce((max, dev) => dev.age > max ? dev.age : max, 0);
    return list.filter((dev) => dev.age === maxAge);
}