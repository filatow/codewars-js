// https://www.codewars.com/kata/5828713ed04efde70e000346

function countLanguages(list) {
    return list.reduce((acc, dev) => {
        if (acc.hasOwnProperty(dev.language)) {
            acc[dev.language] += 1;
        } else {
            acc[dev.language] = 1;
        }
        return acc;
    }, {})
}