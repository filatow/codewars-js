// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable (seconds) {
  const HH = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const rest = seconds % 3600;
  const MM = Math.floor(rest / 60).toString().padStart(2, '0');
  const SS = (rest % 60).toString().padStart(2, '0');
  return `${HH}:${MM}:${SS}`;
}