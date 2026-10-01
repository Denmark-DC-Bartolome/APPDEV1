// Block scope


if (true) {
    let insideBlock = "only visible here";
    ////According to the lesson, let and const are block-scoped, 
    // which means they only exist inside the block where they were declared. 

    console.log(insideBlock);
}

try {
    //outside the block:
    console.log(insideBlock);
    //JavaScript cannot access it anymore.

} catch (error) {
    console.log("insideBlock is not defined out here");
    //The attempted access causes a ReferenceError,
    // nd catch handles it instead of letting the proagram stop.
}



// Closure


function createCounter() {
//Every time createCounter() runs, it creates its own: 

    let count = 0;
    //starting at: 0

    //Then it returns another function:
    return function increment() {
        count++;
        return count;
    };
}

const counterA = createCounter();
const counterB = createCounter();
//each call created its own separate --count--.

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1