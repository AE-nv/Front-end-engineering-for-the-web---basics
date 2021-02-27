// The scope of a variable declared with var is its current execution context and closures thereof, 
// which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global

console.log(x);
var x=5;
console.log(x);