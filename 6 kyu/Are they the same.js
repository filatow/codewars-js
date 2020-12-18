// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(arr1, arr2) {
  if (!((arr1 instanceof Array) && (arr2 instanceof Array))) {
    return false;
  }
  var arr2copy = arr2.slice();
  var arr1CheckResult = arr1.every((el1) => {
    var ind = arr2copy.indexOf(el1**2);
    if (ind !== -1) {
      arr2copy = arr2copy.slice(0, ind).concat(arr2copy.slice(ind + 1));
      return true;
    }
    return false;
  });

  return (arr1CheckResult && !arr2copy.length);
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2));