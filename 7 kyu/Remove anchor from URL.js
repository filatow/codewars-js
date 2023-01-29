// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url) {
  const sharpIndex = url.indexOf('#');
  if (sharpIndex !== -1) {
    return url.slice(0, sharpIndex);
  }
  return url;
}

console.log(removeUrlAnchor('www.codewars.com#about'));