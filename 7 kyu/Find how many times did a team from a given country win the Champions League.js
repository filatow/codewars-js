// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9

function countWins(winnerList, country) {
    let count = 0;
    winnerList.forEach((w) => {
        if (w.country === country) count += 1
    })
    return count;
}

function countWins2(winnerList, country) {
    return winnerList.reduce((acc, winner) => winner.country === country ? ++acc : acc, 0)
}