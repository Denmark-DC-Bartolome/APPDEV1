// try, catch, and throw

function divide(a, b) {
    //creates a function that accepts two numbers.
    if (b === 0) {
        //checks whether the second number is 0
        throw new Error("Cannot divide by zero");
    }
    //If b is not 0, this runs:
    return a / b;
    //and returns the result of the division.
}

try {
    //The code inside try is the code that might fail.
    console.log(divide(10, 0));

    //So JavaScript moves to the catch block.    
} catch (error) {
    console.log("Something went wrong:", error.message);
    //catch receives the error.
}


// JSON.stringify() and JSON.parse()

const user = {
    name: "Dreay",
    age: 22,
    isStudent: true
};

//takes a JavaScript object and turns it into JSON text.
const jsonString = JSON.stringify(user);

console.log(jsonString);

//JSON.parse() does the opposite: it turns JSON text back into a JavaScript object.
const parsedUser = JSON.parse(jsonString);

console.log(parsedUser.name);

//parsedUser has been converted back into an object
console.log(typeof jsonString, typeof parsedUser);