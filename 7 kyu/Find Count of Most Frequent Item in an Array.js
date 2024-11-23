// https://www.codewars.com/kata/56582133c932d8239900002e

function mostFrequentItemCount(collection) {
    if (!collection.length) return 0;
    const r = {};
    for (const item of collection) {
        r[String(item)] = r[String(item)] ? r[String(item)] + 1 : 1
    }
    return  Object.entries(r).sort((a, b) => b[1] - a[1])[0][1]
}

console.log(
    mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
)