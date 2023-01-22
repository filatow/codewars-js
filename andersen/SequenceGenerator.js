function sequence(n, pattern) {
  if (typeof pattern === 'function') {
    return new Array(n).fill().map(pattern);
  } else {
    return new Array(n).fill(pattern);
  }
}



sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]