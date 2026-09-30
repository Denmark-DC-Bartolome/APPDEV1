// Learning destructuring.
// Destructuring lets us take values from objects or arrays
// and store them directly into variables.

// 1. Object destructuring
const person = {
    name: "Dreay",
    age: 22
};

// destructuring gives us a shorter way:
const { name, age } = person;
// This means: 
    // take the 'name' property from person
    // and store it in a variable called 'name'.

// take the 'age' property from person
// and store it in a variable called 'age'.

console.log(name, age);

// 2. Array destructuring
const hobbies = ["coding", "gaming", "watching anime"];

// Arrays use square brackets [ ] for destructuring.

const [hobby1, hobby2] = hobbies;

// This means:
    // hobby1 gets the FIRST item
    // hobby2 gets the SECOND item

    // hobby1 = "coding"
    // hobby2 = "gaming"

console.log(hobby1, hobby2);


// 3. Destructuring inside function parameters
function printName({ name }) {
    // Instead of receiving the whole object first, we immediately extract only the 'name' property.

    console.log(name);
}

printName(person);

// We passed the whole 'person' object:
// {
//     name: "Dreay",
//     age: 22
// }

// But the function only extracts the 'name' property.
