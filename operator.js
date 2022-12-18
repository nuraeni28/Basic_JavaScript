//1.assigment
let x = 26;
let y = 2;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;

console.log(x);

//2.comparison
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) 
console.log(aString === aNumber)


//3.logical
let a = 20;
let b = 24;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true    