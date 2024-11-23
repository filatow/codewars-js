// https://www.codewars.com/kata/58287977ef8d4451f90001a0

function isSameLanguage(list) {
    return new Set(list.map((dev) => dev.language)).size === 1
}