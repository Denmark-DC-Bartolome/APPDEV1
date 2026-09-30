//JavaScript treats values as either truthy or falsy when it needs a true/false answer.


const values = [0, "", "hello", null, undefined, [], {}];

//falsy: 
    // false
    //0
    //""
    //null
    //undefined
    //NaN

//truthy
    //[]
    //{}
    //"0"

values.forEach((val) => {
    if (val) {
        console.log(val, "-> truthy");
    } else {
        console.log(val, "-> falsy");
    }
});


// &&, || and !

const username = "denmark";
const password = "dreay";

const canLogIn = username !== "" && password !== "";
// && means BOTH conditions must be true.


console.log(canLogIn);


const isAdmin = false;
const isSubscriber = true;

const canWatch = isAdmin || isSubscriber;
// || means at least ONE condition


console.log(canWatch);

//Short-circuiting with ||
console.log("" || "default");
    // The first value is: ""
    // An empty string is falsy.
    // So || keeps looking for a truthy value.
    // "default" is truthy.


// Short-circuiting with &&
console.log(username && "Welcome!");
    // username = "Denmark"
    // Since the first value is truthy, && continues to the next value.


console.log(!canLogIn);
// ! reverses a boolean.

    // true  becomes false
    // false becomes true