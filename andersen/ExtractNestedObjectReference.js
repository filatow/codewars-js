// const obj = { 
//   a: { 
//     b: { 
//       c: 'd' 
//     },
//     e: 'f'
//   }
// };

// function get(obj, path, defaultValue) {
//   const objProperties = path.split(`.`);
//   const soughtValue = objProperties.reduce((accumulator, currentValue) => {
//     if (accumulator !== undefined) {
//       return accumulator[currentValue];
//     }
//     return undefined;    
//   }, obj);
//   if (soughtValue) {
//     return soughtValue;
//   }
//   return defaultValue;
// }

// console.log(get(obj, 'a.x.e', 'My default value'));

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash = function(path) {
  const properties = path.split(`.`);
  const soughtValue = properties.reduce((accumulator, currentValue) => {
    if (accumulator !== undefined) {
      return accumulator[currentValue];
    }
    return undefined;    
  }, this);
  return soughtValue;
}

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined