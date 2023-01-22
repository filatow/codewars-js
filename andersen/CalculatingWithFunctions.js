
function culcAccordingParameterType(number, parameter) {
  if (typeof parameter !== 'function') {
    return number;
  }
  return parameter(number);
}

function zero(parameter) {
  const NUM = 0;
  return culcAccordingParameterType(NUM, parameter);
}

function one(parameter) {
  const NUM = 1;
  return culcAccordingParameterType(NUM, parameter);
}

function two(parameter) {
  const NUM = 2;
  return culcAccordingParameterType(NUM, parameter);
}

function three(parameter) {
  const NUM = 3;
  return culcAccordingParameterType(NUM, parameter);
}

function four(parameter) {
  const NUM = 4;
  return culcAccordingParameterType(NUM, parameter);
}

function five(parameter) {
  const NUM = 5;
  return culcAccordingParameterType(NUM, parameter);
}

function six(parameter) {
  const NUM = 6;
  return culcAccordingParameterType(NUM, parameter);
}

function seven(parameter) {
  const NUM = 7;
  return culcAccordingParameterType(NUM, parameter);
}

function eight(parameter) {
  const NUM = 8;
  return culcAccordingParameterType(NUM, parameter);
}

function nine(parameter) {
  const NUM = 9;
  return culcAccordingParameterType(NUM, parameter);
}

function times(parameter2) {
  return function(parameter1) {
    return parameter1 * parameter2;
  }
}

function plus(parameter2) {
  return function(parameter1) {
    return parameter1 + parameter2;
  }
}

function minus(parameter2) {
  return function(parameter1) {
    return parameter1 - parameter2;
  }
}

function dividedBy(parameter2) {
  return function(parameter1) {
    return Math.floor(parameter1 / parameter2);
  }
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3