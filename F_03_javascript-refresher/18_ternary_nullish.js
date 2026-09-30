//ternary operator, 
// optional chaining ?.,
//  and nullish coalescing ??.

const score = 72;

const result = score >= 70 ? "Pass" : "Fail";
//condition ? valueIfTrue : valueIfFalse
    //is a shorter form of an if...else.

console.log(result); // "Pass"


const num = 7;

console.log(num % 2 === 0 ? "even" : "odd"); 


const user = { name: "Denmark" };

console.log(user.address?.city); 
    // user.address?.city uses optional chaining so JavaScript returns undefined instead of crashing when address does not exist.


const age = 0;

console.log(age || 18); // 18

console.log(age ?? 18); // 0
    // age ?? 18 uses the fallback only when the value is null or undefined,
    //  unlike ||, which also treats 0 as falsy