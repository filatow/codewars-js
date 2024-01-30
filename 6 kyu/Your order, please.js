// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
    return words.split(' ')
        .sort((a, b) => a.at(a.search(/\d/)) - b.at(b.search(/\d/)))
        .join(' ');
}