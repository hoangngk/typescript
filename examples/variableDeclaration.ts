

// let
function f() {
  let a: number = 10;
  console.log(a);
}
console.log(a);


// var

function f1() {
  var b: string = 'hello';
  if (1) {
    // let b1 = b;
    var b1 = b;
  }
  console.log(b1);
  console.log(b);
}

// const
const arr: Array<number> = [1, 3, 4];
// not allow
arr = [1,2,2,2];

