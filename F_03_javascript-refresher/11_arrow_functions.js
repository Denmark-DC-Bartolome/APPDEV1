// Learning arrow functions.
// Arrow functions are a shorter way of writing functions in JavaScript.
// They can have no parameters, one parameter, or multiple parameters.


// Regular function example:
//
// function greet(name) {
//     return "Hello, " + name;
// }


// Arrow function:
const greet = name => "Hello, " + name;

// 'const greet' = creates a variable named greet that stores the function.

// 'name' = parameter of the function.
//
// '=>' = the arrow. It separates the parameter from what the function does.

// "Hello, " + name = the value that will be returned.

// Because there are no { } curly braces,
// JavaScript automatically returns the result.
// This is called an IMPLICIT RETURN.

console.log(greet("Dreay"));
// "Dreay" is the argument passed into the 'name' parameter.

const square = n => n * n;
// 'n' is the parameter.

// Because there is only ONE parameter,
// parentheses around it are optional.

// This:

// const square = n => n * n;

// is also valid as:

// const square = (n) => n * n;

// 'n * n' is automatically returned because
// we are using an implicit return.

console.log(square(6));
// n becomes 6.



const sayHi = () => {
    console.log("Hi!");
};
// This function does not need any information,so there are no parameters.

// When an arrow function has NO parameters, we must still write empty parentheses: ()

// The curly braces allow us to write multiple statements inside the function.

sayHi();
