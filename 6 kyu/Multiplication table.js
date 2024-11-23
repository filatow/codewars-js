// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function(size) {
    const table = [];
    for (let i = 1; i <= size; i += 1) {
        table.push([]);
        for (let j = 1; j <= size; j += 1) {
            table[i - 1].push(i * j);
        }
    }
    return table;
}

console.log(multiplicationTable(5))