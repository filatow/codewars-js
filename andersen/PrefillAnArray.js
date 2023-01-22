function prefill(n, v) {
  switch (typeof n) {
    case 'string':
    case 'number':
      if (((n % 1 === 0) && (n >= 0) && (!isNaN(n)) && isFinite(n))) {
        break;
      }
    default:
      throw new TypeError(`${n} is invalid`);
  }

  if (arguments.length < 2) {
    return new Array(Number(n)).fill(undefined);
  }

  return new Array(Number(n)).fill(v);
}

const output = prefill('5.5');
console.log('🖨️ :: output', output);
