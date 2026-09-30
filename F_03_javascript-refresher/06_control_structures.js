//Control structures: code that lets your program make decisions and repeat actions.

let score = 87;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
//JavaScript checks these conditions from top to bottom, and once it finds the first condition that is true, it runs that block and skips the rest.


for (let i = 1; i <= 5; i++) {
    //for loop = repeat when the count is known
    console.log(i);
}

let count = 0;

while (count < 3) {
    //while loop = repeat while a condition is true
    console.log("Hello");
    count++;
}