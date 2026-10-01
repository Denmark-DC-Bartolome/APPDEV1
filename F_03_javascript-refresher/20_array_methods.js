const students = [
    { name: "Dreay", grade: 92 },
    { name: "Denmark", grade: 85 },
    { name: "DC", grade: 55 },
];

const passing = students.filter(s => s.grade >= 60);
    //.filter() keeps items that pass a test

console.log(passing.map(s => s.name)); // ["Dreay", "Denmark"]


const dreay = students.find(s => s.name === "Dreay");
    //.find() returns the first matching item

console.log(dreay); // { name: "Dreay", grade: 92 }


//.some() and .every() answer yes/no questions about the array
//s.grade means Get the grade of the student currently being checked.

console.log(students.some(s => s.grade < 60)); // true
    //.some() as asking: "Is there at least one?"
console.log(students.every(s => s.grade >= 60)); // false
    //.every() asks whether all items pass the test. "Did every student get at least 60?"


const ranked = [...students].sort((a, b) => b.grade - a.grade);
    //sort() Rank students highest to lowest

console.log(ranked.map(s => s.name)); // ["Dreay", "Denmark", "DC"]