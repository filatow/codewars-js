function createPhoneNumber(numbers) {
    const groups = [
        numbers.slice(0, 3).join(''),
        numbers.slice(3, 6).join(''),
        numbers.slice(6).join(''),
    ]
    return `(${groups[0]}) ${groups[1]}-${groups[2]}`
}