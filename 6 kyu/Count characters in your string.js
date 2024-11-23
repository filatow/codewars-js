// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(str) {
    const res = {};
    for (const char of str) {
        if (res.hasOwnProperty(char)) {
            res[char] += 1
        } else {
            res[char] = 1
        }
    }
    return res;
}

console.log(count('ababac'))