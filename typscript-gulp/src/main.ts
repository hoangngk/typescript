import { sayHello } from './greet';

function hello(compiler: string) {
    console.log(`Hello guys from ${compiler}`);
}

hello("TypeScript")

console.log(sayHello("TypeScript"));