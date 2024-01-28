// https://www.codewars.com/kata/55a5c82cd8e9baa49000004c

function divisibleCount(x, y, k) {
    let first, last;
    for (let i = x; i <= y; i += 1) {
        if (i % k === 0) {
            first = i
            break;
        }
    }
    for (let i = y; i >= x; i -= 1) {
        if (i % k === 0) {
            last = i
            break;
        }
    }
    return (first !== undefined && last !== undefined) ? (last - first) / k + 1 : 0;
}


console.log(divisibleCount(7, 130, 11)); // 11
