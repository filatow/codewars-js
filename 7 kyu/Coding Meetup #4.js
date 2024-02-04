// https://www.codewars.com/kata/5827bc50f524dd029d0005f2

function getFirstPython(list) {
    const firstPyDevIndex = list.findIndex((dev) => dev.language === 'Python')
    return (firstPyDevIndex >= 0)
        ? `${list[firstPyDevIndex].firstName}, ${list[firstPyDevIndex].country}`
        : 'There will be no Python developers'
}