// Equality
console.log(5 == "5");
    //converts them before comparison
console.log(5 === "5");
    //=== checks both the type and value

// Undefined and null
let notDefined;
    //undefined represents a variable that has been declared but has not been given a value.
let empty = null;
    //we intentionally assigned something : null  =null as intentionally empty.

console.log(notDefined);
console.log(empty);

// Regular function vs arrow function
const obj = {
    name: "Student",

    regularMethod: function () {
        // A regular function has 'this' depending on how the function is called.
        // Since we call obj.regularMethod(),
        // 'this' refers to the 'obj' object.
        console.log(this.name);
    },

    arrowMethod: () => {
        // An arrow function does NOT create its own 'this'.
        // It borrows 'this' from the surrounding scope.
        // Because of that, it does not automatically refer to 'obj'.
        console.log(this.name);

    }
};

obj.regularMethod();
obj.arrowMethod();

// Reference vs copy
const original = [10, 20, 30];

const copyByReference = original;
    // This does NOT create a completely separate array.
    // It copies the reference, meaning both variables point
    // to the SAME array in memory.

copyByReference.push(40);

console.log(original);

// The spread operator (...) creates a NEW array
// containing the values from the original array.
const copyBySpread = [...original];
copyBySpread.push(50);
    // Adding 50 to copyBySpread does NOT affect original, because they are now separate arrays.

console.log(original);
console.log(copyBySpread);