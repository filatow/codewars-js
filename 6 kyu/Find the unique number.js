// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    const theSame = arr[0] === arr[1] || arr[0] === arr[2] ? arr[0] : arr[1]
    return arr.find((num) => {
        // console.log(num);
        return num !== theSame;
    });
}

console.log(findUniq([1, 1, 2, 1, 1, 1]));