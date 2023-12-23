// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(input) {
    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const words = input.split(' ');
    const prospect = {score: 0, value: ''}
    for (const w of words) {
        const score = w.split('').reduce((acc, letter) => acc + alpha.indexOf(letter), 0);
        if (score > prospect.score) {
            prospect.value = w;
            prospect.score = score;
        }
    }
    console.log(prospect);
    return prospect.value;
}

high('ubud');