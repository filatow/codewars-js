// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function isEven(n) {return n % 2 == 0};

function partitionOn(pred, items) {
  const theFs = [];
  const theTs = [];
  
  items.forEach(item => {
    pred(item) ? theTs.push(item) : theFs.push(item);
  });

  const sortedItems = theFs.concat(theTs);

  items.forEach((_item, index, items) => {
    items[index] = sortedItems[index];
  })

  return theFs.length;
}


const testArr = [1, 2, 3, 4, 5, 6];

console.log(`before : `, testArr);
partitionOn(isEven, testArr);
console.log(`after : `, testArr);
