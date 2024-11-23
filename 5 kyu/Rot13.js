function rot13(message) {
    const
        lowerStart = 'a'.charCodeAt(0),
        lowerEnd = 'z'.charCodeAt(0),
        upperStart = 'A'.charCodeAt(0),
        upperEnd = 'Z'.charCodeAt(0);

    return message.split('').reduce((accum, char) => {
        let charCode = char.charCodeAt(0);
        if (lowerStart <= charCode && charCode <= lowerEnd) {
            charCode = charCode + 13 > lowerEnd ? charCode - 13 : charCode + 13;
        }
        if (upperStart <= charCode && charCode <= upperEnd) {
            charCode = charCode + 13 > upperEnd ? charCode - 13 : charCode + 13;
        }
        return accum + String.fromCharCode(charCode);
    }, '');
}