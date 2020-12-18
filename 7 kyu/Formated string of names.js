function list(names) {
  names = names.map((elem, ind, arr) => {
    const arrLength = arr.length;
    switch (ind) {
      case (ind = arrLength - 1):
        return elem.name;  
      case (ind = arrLength - 2):
        return elem.name + ' & ';
      default:
        return elem.name + ', ';  
    }
  }).join('');
  return names;
}

const names = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}];
console.log(list(names));
