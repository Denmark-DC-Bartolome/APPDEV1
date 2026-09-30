// Learning the differences between let, const, and var.
// let can be reassigned, const cannot be reassigned, and var is the older way of declaring variables.


// Using 'let'
let name = "Dreay";
    // 'let' is used when the value of a variable may change later.
    // Right now, the value stored in 'name' is "Dreay".

name = "Dreay DC";
    // This is called reassignment.
    // We are changing the value of the existing variable.
    // We do NOT write 'let' again because the variable already exists.

console.log(name);
    // Output: Dreay DC


// Using 'const'
const age = 22;
    // 'const' is used when the variable should not be reassigned.
    // The value of 'age' is currently 22.

console.log(age);
// Output: 22


// Trying to reassign a const will cause an error.

// age = 23;

// If the line above is uncommented, JavaScript will give an error:
// TypeError: Assignment to constant variable.

// This happens because a variable declared with 'const'
// cannot be reassigned to a different value.


// Using 'var'
var city = "Baguio";
    // 'var' is the older way of declaring variables in JavaScript.
    // It still works, but modern JavaScript usually uses let and const instead.

console.log(city);
    // Output: Baguio


// Easy way to remember:
//
// let   = the value CAN be reassigned
// const = the value CANNOT be reassigned
// var   = older way of declaring variables