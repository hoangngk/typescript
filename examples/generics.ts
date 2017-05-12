

function identity(arg: number): number {
  return arg;
}

function indentity2(arg: any): any {
  return arg;
}

function indentity3<T>(arg: T): T {
  return arg;
}

let output = indentity3<string>('hello');
let output2 = indentity3('hello');


function loggingIndentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// alternatively
function loggingIndentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

loggingIndentity2([1, 2, 3]);

// define a generic types
let myIndentity: <T>(arg: T) => T = indentity3;




