// https://www.codewars.com/kata/56f3a1e899b386da78000732

function partlist(arr) {
    const res = []
    for (let i = 1; i < arr.length; i += 1) {
        res.push([
            arr.slice(0, i).join(' '),
            arr.slice(i, arr.length).join(' '),
        ])
    }
    return res;
}

const a = ["az", "toto", "picaro", "zone", "kiwi"]
console.log(partlist(a))