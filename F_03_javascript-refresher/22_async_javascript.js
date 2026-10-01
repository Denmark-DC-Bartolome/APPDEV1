//callbacks, Promises, and async/await


//A callback is a function passed into another function so it can be run later. : function fetchUserMock(callback) {
function fetchUserMock(callback) {

    //setTimeout(() => {  :  tells JavaScript to wait before running the code inside.
    //wait 1000 or 1 second
    setTimeout(() => {

        //function receives another function through the parameter: callback
        //After one second:
        callback({ name: "Dreay", age: 70 });
        //runs the callback and sends the user object to it. 

    }, 1000);
}

// then 
//passes this function as the callback.
fetchUserMock((user) => {
    console.log("Got user:", user);
});




//A Promise represents a value that isn't ready yet, but will eventually resolve successfully or reject if something fails.

//This creates and returns a Promise.
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "Dreay", age: 70 }), 1000);
    //resolve = means the Promise completed successfully.
    });
}



//async : keyword tells JavaScript that this function will work with asynchronous operations
//we use --- async/await --- so Promise-based code can be written in a more readable, top-to-bottom style.
async function showUser() {
    try {
        const user = await fetchUser();
        //fetchUser() returns the Promise.
        // await : means wait for the Promise to finish before continuing.

        console.log("Got user:", user);
    } catch (error) {
        console.log("Failed to load user");
    }
}

showUser();