function zero() {
    const num = 0;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function one() {
    const num = 1;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function two() {
    const num = 2;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function three() {
    const num = 3;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function four() {
    const num = 4;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function five() {
    const num = 5;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function six() {
    const num = 6;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function seven() {
    const num = 7;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function eight() {
    const num = 8;
    if (!arguments.length) return num;
    return arguments[0](num);
}
function nine() {
    const num = 9;
    if (!arguments.length) return num;
    return arguments[0](num);
}

function plus(o2) {
    return (o1) => o1 + o2;
}
function minus(o2) {
    return (o1) => o1 - o2;
}
function times(o2) {
    return (o1) => o1 * o2;
}
function dividedBy(o2) {
    return (o1) => Math.floor(o1 / o2);
}