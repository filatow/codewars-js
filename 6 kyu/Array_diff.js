// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    return a.reduce((acc, val) => {
        if (!b.includes(val)) {
            acc.push(val)
        }
        return acc;
    }, []);
}

console.log(arrayDiff(
    [1, 2, 3, 4, 3, 2, 3, 5, 1, 6],
    [2, 3, 5]
))