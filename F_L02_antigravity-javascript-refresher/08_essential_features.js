//three modern JavaScript features : 
    // .map() for transforming arrays, 
    // destructuring for pulling values out of objects, 
    // and the spread operator for copying an array while adding more values.

const hobbies = ["coding", "gaming", "watching anime"];

hobbies.map(hobby => console.log(hobby));
    // .map() = JavaScript goes through the array one item at a time

const student = {
    name: "Dreay",
    age: 22
};

const { name, age } = student;
    //Pull specific properties out of an object.

console.log(name, age);

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];
    // ... = Copy the items from one array into a new array and add more values.s

console.log(newNumbers);