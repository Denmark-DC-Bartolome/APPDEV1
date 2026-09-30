//Array
    //An array is used when you want to store a list of values in one variable.it uses square brackets [] separeted by commas ,

let favoriteFoods = ["Adobo", "Sinigang", "Sisig"];

favoriteFoods.push("Chicken Inasal");
    // .push() adds new item to the end of an array.

favoriteFoods.shift();
    // .shift() removes the first item from the array

for (const food of favoriteFoods) {
    // for loop or any loops let us repeat codes 
    console.log(food);
}

const likedFoods = favoriteFoods.map(food => "I like " + food);
    // .map() takes each item in an array, transforms it, and creates a new array, it leaves the original array unchanged.

console.log(likedFoods);