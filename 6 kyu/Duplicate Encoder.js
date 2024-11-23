// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
    const lowerWord = word.toLowerCase();
    const mapping = lowerWord.split('').reduce((acc, letter) => {
        acc[letter] = acc[letter] ? ')' : '(';
        return acc;
    }, {})

    return lowerWord.split('').map((letter) => mapping[letter]).join('');
}

console.log(duplicateEncode('Success')) // ")())())"