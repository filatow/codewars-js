// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    const amount = names.length;
    const mapping = {
        '0': () => 'no one likes this',
        '1': () => `${names[0]} likes this`,
        '2': () => `${names[0]} and ${names[1]} like this`,
        '3': () => `${names[0]}, ${names[1]} and ${names[2]} like this`,
        'default': () => `${names[0]}, ${names[1]} and ${amount - 2} others like this`,
    }

    return amount < 4
        ? mapping[amount]()
        : mapping.default()
}