// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

const maxSequence = function (arr) {
    const len = arr.length;
    let matrix = Array(len).fill(null).map(() => Array(len).fill(null));
    let res = 0;

    for (let i = 0; i < arr.length; i += 1) {
        matrix[i][i] = arr[i];
        if (matrix[i][i] > res) res = matrix[i][i];
        for (let j = i + 1; j < arr.length; j += 1) {
            matrix[i][j] = matrix[i][j - 1] + arr[j];
            if (matrix[i][j] > res) res = matrix[i][j];
        }
    }
    return res;
}

console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 22, -38])); // 22
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))
console.log(maxSequence([23, -37, 26, -6, 21, -1, -33, -35, 28, 25]))
console.log(maxSequence([
    10, -5, 15, -100, 2, 3, 4, 5, 6, -5, 2, 3, 4, 5, 6, -100, 8, 9, -5, 10])
) // 35 [4, 14]
