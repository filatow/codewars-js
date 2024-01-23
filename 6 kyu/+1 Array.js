// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
    if (!arr.length || arr.some(val => val < 0 || val > 9)) return null;

    const reversed = arr.reverse();
    let increasing = true;
    reversed.forEach((item, idx, a) => {
        if (!increasing) return;

        if (item !== 9) {
            a[idx] = item + 1;
            increasing = false;
        } else {
            a[idx] = 0;
        }
    })
    if (increasing) reversed.push(1);
    return reversed.reverse();
}


console.log(upArray([4, 3, 2, 5])) // [4,3,2,6]
console.log(upArray([1, 1, 1])) // [1,1,2]
console.log(upArray([9, 9])) // [1,0,0]
console.log(upArray([0, 7])) // [0,8]
console.log(upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
