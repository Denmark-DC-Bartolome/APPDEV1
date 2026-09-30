// Learning JavaScript Modules and exports.

// 'export' allows us to make something from this file available to another JavaScript file.

// 2 types:
// 1. Default export
// 2. Named export

const userInfo = {
    name: "Dreay",
    age: 20
};

// 'userInfo' is a normal JavaScript object.
// It contains two properties: name , age 


// 2. Creating a function
function greet() {
    return "Hello from my JavaScript module!";
}

// 'greet' is a normal function.
// When the function is called: greet()
// it returns: "Hello from my JavaScript module!"


// 3. Default export
export default greet;

// 'export default' makes greet the DEFAULT export of this file.

// A JavaScript module can only have
// ONE default export.


// 4. Named export
export { userInfo };

// This makes userInfo a NAMED export.
// Named exports use curly braces: { userInfo }