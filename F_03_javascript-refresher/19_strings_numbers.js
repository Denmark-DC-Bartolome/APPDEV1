const raw = " Denmark Bartolome ";

const clean = raw.trim();
    //removes extra spaces

const [first, last] = clean.split(" ");
    //separates a string into parts

console.log(first.toUpperCase()); //"DENMARK"
    //changes text to uppercase

console.log(clean.includes("Bartolome")); // true
    //checks whether text contains something

console.log(clean.slice(0, 5)); // "Denma"
    //akes part of a string

console.log(`Full name: ${first} ${last}`);
    //string concatination


// Number methods

console.log(parseInt("50px")); // 50
    //converts part of a string into an integer

console.log((71.655555).toFixed(2)); // "71.66"
    //formats a number to a chosen number of decimal places

const result = "abc" / 2;

console.log(result); // NaN

console.log(Number.isNaN(result)); // true
    //    //checks whether a value is NaN