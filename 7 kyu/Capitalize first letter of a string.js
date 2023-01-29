// https://www.codewars.com/kata/56c19316e8b139dff60006da

String.prototype.capitalize = function() {
  if (/^[a-z]/.test(this)) {
    const firstLetter = String.fromCharCode(this.charCodeAt(0) - 32);
    return firstLetter + this.slice(1);
  }
  return this;
}


console.log('some test'.capitalize())