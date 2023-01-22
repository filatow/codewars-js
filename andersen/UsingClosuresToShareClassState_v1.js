const Cat = (function() {
  const weights = [];
  return class Cat {
    constructor(name, weight) {
      if (typeof name !== 'string' && typeof weight !== 'number') {
        throw new Error('incorrect parameters passed');
      }
      this._number = weights.length;
      this._name = name;
      this._weight = weight;
      weights.push(weight);
    }
  
    get weight() {
      return this._weight;
    }
  
    set weight(value) {
      this._weight = value;
      weights[this._number] = value;
    }

    static averageWeight() {
      return weights.reduce((acc, elem) => acc + elem) / weights.length;
    }
  }
})();

const tom = new Cat('Tom', 4);
const rick = new Cat('Rick', 6);

console.log(Cat.averageWeight());

const mishka = new Cat('Mishka', 8);

console.log(Cat.averageWeight());

mishka.weight = 38;
console.log(Cat.averageWeight());
console.log(mishka.weight);