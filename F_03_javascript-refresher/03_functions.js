//learning what functions are, parameters, return, arrow functions introduction, and a function that returns multiple results inside an object.


//A function is a reusable block of code that performs a task. it lets you create the logic ONCE
function greet (name){
    // 'function' = tells JavaScript "I'm creating a function." 
    // 'greet' = is the name of the function . Function names normally y describe an action and often begin with a verb, such as greet, calculate, or isValid
    // '(name)' = is the parameter, it vis a ariable that receives information when the function is called. {.....}

    return "Hello, " + name;
    // 'return' will send this result back to whoever called the function. It gives value back
}

const square = (num) => {
    //arrowfunction means : take num and run this function.
    return num * num;
};

//Making 1 function with 2 parameter
function calculator(a, b) {
    // the function named 'calculator' is expecting 2 parameters(numbers)
    return {
        sum: a + b,
        product: a * b
    };
    //inside the curly braces is an object, it lets us group several related values.
}

console.log(greet("Dreay"));
    //this part is when when calling the function

//Parameter vs argument

    // Parameter = placeholder  = " 'name' " ist the parameter. it means, I'll receive a value later and temporarily call it name.
    // Argument  = actual value =  " 'Dreay ' " is the the argument . It means, Use "Dreay" as the value of name.

console.log(square(6));

console.log(calculator(8, 3));


