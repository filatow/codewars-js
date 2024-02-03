// https://www.codewars.com/kata/539ee3b6757843632d00026b

const capitals = function (word) {
    return word.split('')
        .reduce((acc, letter, i) => {
            letter === letter.toUpperCase() && acc.push(i)
            return acc
        }, [])
};

console.log(capitals('CodEWaRs'))