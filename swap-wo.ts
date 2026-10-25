let a : number = 20;
let b : number = 200;

console.log("a is",a);
console.log("b is",b);


a = a + b;
b = a - b;
a = a - b;

console.log("Now a is",a);
console.log("Now b is",b);
