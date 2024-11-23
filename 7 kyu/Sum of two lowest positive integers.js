// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(nums) {
    let theLowest =  Infinity;
    let secondLowest = Infinity;

    for (let n of nums) {
        if (n <= theLowest) {
            secondLowest = theLowest;
            theLowest = n;
        } else if (n < secondLowest) {
            secondLowest = n;
        }
    }

    return theLowest + secondLowest;
}