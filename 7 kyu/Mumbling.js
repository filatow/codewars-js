function accum(letters) {
  let output = ``;
  for (let ind = 0; ind < letters.length; ind++) {
    if (ind !== 0) {
      output += '-';
    }
    output += letters[ind].toUpperCase() + letters[ind].toLowerCase().repeat(ind);
  }
  return output;
}

console.log(accum(`accum`));