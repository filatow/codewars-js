function hello(name) {
  if (!name) {
    return (`Hello, World!`);
  }
  let letters = Array.from(name);
  
  letters = letters.map((elem, ind) => {
    if (ind === 0) {
      return elem.toUpperCase();
    } else {
      return elem.toLowerCase();
    }
  }).join('');
  
  return(`Hello, ${letters}!`);
}

console.log(hello(`jEnyA`));
