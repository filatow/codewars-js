// https://www.codewars.com/kata/58291fea7ff3f640980000f9

function allContinents(list) {
    const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const devContinents = list.map(dev => dev.continent)
    return continents.every(c => devContinents.includes(c))
}

const list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];


console.log(allContinents(list1));