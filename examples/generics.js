function identity(arg) {
    return arg;
}
function indentity2(arg) {
    return arg;
}
function indentity3(arg) {
    return arg;
}
let output = indentity3('hello');
let output2 = indentity3('hello');
function loggingIndentity(arg) {
    console.log(arg.length);
    return arg;
}
// alternatively
function loggingIndentity2(arg) {
    console.log(arg.length);
    return arg;
}
loggingIndentity2([1, 2, 3]);
// define a generic types
let myIndentity = indentity3;
