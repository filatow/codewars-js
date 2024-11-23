// https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
    const isJSDevFromEurope = (dev) => dev.continent === 'Europe' && dev.language === 'JavaScript'
    return list.reduce((acc, d) => isJSDevFromEurope(d) ? acc + 1 : acc, 0);
}

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

console.log(countDevelopers(list1));