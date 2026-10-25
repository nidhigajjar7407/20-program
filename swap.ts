let a : number = 5;
let b : number = 8;
let c : number;

console.log("a is",a);
console.log("b is",b);

c = a;
a = b;
b = c;

console.log("Now a is",a);
console.log("Now b is",b);
