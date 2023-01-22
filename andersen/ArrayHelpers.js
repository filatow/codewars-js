var numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = (this[i] ** 2);
  }
  return result;
}

Array.prototype.cube = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = (this[i] ** 3);
  }
  return result;
}

Array.prototype.average = function() {
  let sum = 0;
  const length = this.length;

  if (length === 0) {
    return NaN;
  }

  for (let i = 0; i < length; i++) {
    sum += this[i];
  }
  const result = sum / length;

  return result;
}

Array.prototype.sum = function() {
  let result = 0;
  const length = this.length;

  for (let i = 0; i < length; i++) {
    result += this[i];
  }

  return result;
}

Array.prototype.even = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      result.push(this[i]);
    }
  }
  
  return result;
}

Array.prototype.odd = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      result.push(this[i]);
    }
  }

  return result;
}



numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]