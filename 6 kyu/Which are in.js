// https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1,array2){
    const ar2AsString = array2.join(' ');
    const filteredAr1 = array1.filter((word) => ar2AsString.includes(word));
    return filteredAr1.sort();
}