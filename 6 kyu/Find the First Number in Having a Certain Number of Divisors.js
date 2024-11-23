// https://www.codewars.com/kata/5612ab201830eb000f0000c0

function memoizedFindMinNum() {
  const memo = {}

  function calcDivCount(n) {
    let count = 0
    const sqrtN = Math.sqrt(n)

    for (let i = 1; i <= sqrtN; i++) {
      if (n % i === 0) {
        count++ // делитель i
        if (i !== n / i) {
          count++ // Другой делитель n / i, если он не равен i
        }
      }
    }

    return count
  }

  return (num) => {
    if (memo[num]) return memo[num]

    let current = 1

    while (true) {
      if (!memo[current]) {
        const temp = calcDivCount(current)

        if (!memo[temp]) memo[temp] = current

        if (temp === num) return current
      }

      current++
    }
  }
}

const findMinNum = memoizedFindMinNum()

// console.log(Math.pow(2, 18));
console.log(findMinNum(13))
console.log(findMinNum(11))
console.log(findMinNum(17))
console.log(findMinNum(19))
