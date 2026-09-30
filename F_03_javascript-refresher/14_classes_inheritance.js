// Learning classes and inheritance.

// A class is like a TEMPLATE for creating objects.
// Instead of writing the same object structure many times,
// we can create a class once and use it to create multiple objects.


// 1. Creating a Person class
class Person {

    // The constructor runs automatically when we create a new object from this class.
    constructor(name) {

        // 'this.name' is a property of the new object.
        // The value comes from the 'name' parameter.
        this.name = name;
    }

    // This is a method of the Person class.
    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}


// 2. Creating a Student class

// 'extends Person' means Student inherits the properties and methods from Person.
class Student extends Person {

    // Student already gets sayHello() from Person.
    // We can also add a new method that belongs to Student.
    study() {
        console.log(this.name + " is studying.");
    }
}


// 3. Creating an object from the class

// 'new Student("Dreay")' creates a new Student object.
// "Dreay" is passed into the constructor
// that Student inherited from Person.
const student = new Student("Dreay");

// Because Student extends Person, 
// the student object can use sayHello().
student.sayHello();


// Student also has its own study() method.
student.study();