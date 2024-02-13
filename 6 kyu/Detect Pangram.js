// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
    const preparedInput = string.replace(/\W/, '').toLowerCase();
    return 'abcdefghijklmnopqrstuvxyz'.split('')
        .every(char => preparedInput.includes(char));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));