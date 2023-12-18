// https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(integers, sum) {
    const pairs = {};
    for (const i of integers) {
        if (pairs.hasOwnProperty(i)) {
            return [pairs[i], i];
        }
        pairs[sum - i] = i;
    }
}
