// https://www.codewars.com/kata/58ef87dc4db9b24c6c000092

function sectSort(arr, start = 0, len) {
    len = len || arr.length - start;
    const end = start + len;
    return [
        arr.slice(0, start),
        arr.slice(start, end).sort((a, b) => a - b),
        arr.slice(end)
    ].flat()
}

// console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5))
console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2))