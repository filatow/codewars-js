// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
    const pairs = {};
    for (let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        if (pairs.hasOwnProperty(num)) {
            return [pairs[num], i];
        }
        pairs[target - num] = i;
    }
}

console.log(twoSum([3, 2, 4, 1, 5, 8], 12));