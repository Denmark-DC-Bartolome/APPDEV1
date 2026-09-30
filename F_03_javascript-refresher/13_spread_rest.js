// Learning the spread and rest operators.
// Both use three dots (...), but they do different things.

// Spread = expands/copies values
// Rest   = collects values

// 1. Spread with arrays
const numbers = [10, 20, 30];

// The spread operator (...numbers) takes every item from the original array and places them inside a NEW array.
const newNumbers = [...numbers, 40, 50];

//the spread operator
console.log(newNumbers);
// The original array is still unchanged.
console.log(numbers);


// Spread with objects
const user = {
    name: "Dreay",
    age: 22
};

const newUser = {
    ...user,
    // ...user copies all properties from 'user into a NEW object.
    course: "BSIS"
    
};

console.log(newUser);


// Rest operator

function sum(...args) {

    // ...args collects all arguments into one array.  
    // passed into this function into ONE array.

    return args.reduce((total, number) => total + number, 0);
        //.reduce() combines all values in an array into one final value.
}

console.log(sum(5, 10, 15, 20));


