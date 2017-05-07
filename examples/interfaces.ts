
// basic
interface SquareConfig {
  color?: string;
  width?: number;
}

// indexable types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;

myArray = ["Bod", "Fred"];

let myArray2: {[index: number]: string} = ["H", '123'];


// class Types
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

