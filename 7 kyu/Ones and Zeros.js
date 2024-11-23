// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    let currentPower = arr.length - 1;
    let result = 0;

    for (const elem of arr) {
        const m = 2**currentPower;
        result += elem * m;
        currentPower -= 1;
    }

    return result;
};