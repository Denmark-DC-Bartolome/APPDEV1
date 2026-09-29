//JavaScript stores different kinds of values, how to check their types, how arithmetic works, and the difference between == and ===.


//A data type tells JavaScript what kind of value something is. eg. string, number boolean

//string :Strings normally use quotation marks
let name = "Dreay";

//number : A number is a numeric value
let age = 22;

//A boolean has only two possible values - true or false
let isStudent = true;

// 'typeof' lets you cheack the type of value
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);

console.log("--------------------")

//Arithmetic
let a = 24;
let b = 6;

console.log("Add:", a + b);
console.log("Divide:", a / b);
console.log("multiply:", a * b);
console.log("Subtract:", a - b);


console.log("--------------------")

// == vs. ===

console.log(" == :","5" == 5);
//Output: true 
//Why? Because == performs type conversion before comparing, and decides their values can be considered equal after conversion.

console.log(" === :","5" === 5);
//Output : false
//Why? Because === checks both the value and the type
