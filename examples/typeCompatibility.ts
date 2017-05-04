type Maybe<T> = T | undefined | null;

interface Named {
  name: string;
}

let x: Named;

let y = {name: "Alice", location: "Seattle"};
// Note that y has an extra location property, but this does not create an error.
// Only members of the target type (Named in this case) are considered when checking for compatibility.
x = y;
// Not allowed
// y = x;

function f(sn: Maybe<string>): string {
  return sn || "Time off";
}

let a: string = f(undefined);
console.log(a);