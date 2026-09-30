// Learning JavaScript Modules and imports.

    // 'import' allows this file to use something
    // that another JavaScript file exported.

// In Part 15, we exported:

// 1. greet     -> default export
// 2. userInfo  -> named export

// 1. Import the default export
import greet from "./15_modules_export.js";

// 'greet' was exported using:  export default greet;
// Because it is a DEFAULT export,
// we do NOT use curly braces when importing it.


// 2. Import the named export

import { userInfo } from "./15_modules_export.js";

// 'userInfo' was exported using:  export { userInfo };
//Because it is a NAMED export,
// we MUST use curly braces.

// The name must also match exactly: userInfo

// 3. Use the imported function

console.log(greet());
    // greet() came from 15_modules_export.js.
    // It should return: Hello from my JavaScript module!


// 4. Use the imported object
console.log(`User: ${userInfo.name}, Age: ${userInfo.age}`);

// userInfo is the object created in Part 15.

// We can access its properties using:
// userInfo.name
// userInfo.age