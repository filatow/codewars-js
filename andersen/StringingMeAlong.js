
const createMessage = (phrase = '') => {
  const phrases = [];
  function checkPhrase(phrase) {
    if (phrase) {
      phrases.push(phrase);
      return checkPhrase;
    }
    return phrases.join(' ');
  }
  return checkPhrase(phrase);
}


const msg = createMessage("Hello")("World!")("how")("are")("you?")();
// "Hello World! how are you?"
console.log(msg);