// Objects.
    //how to keep related information together under one variable,
    // how a function can live inside an object as a method, 
    // how ---this--- works, and how to add a new property after the object has already been created.

const aboutMe = {
    //An object is a container for related information.
    name: "Dreay",
    age: 22,
    course: "BSIS",
    //inside the object, are called properties (name,age, course) and their values are ("Dreay" , 20, "BSIS")
        //How do we access a property? We use a dot: (console.log(aboutMe.name);)

    //Method is the a function belongs to an object, we call it a method.
    introduce: function () {
        // introduce -- is the method
        console.log(`Hi, I'm ${this.name}, age ${this.age}, and I am taking ${this.course}.`);
        // --this-- refers to the object that the method belongs to. (this.name)
    }
};

aboutMe.hobby = "Coding";


aboutMe.introduce();
    //parenthesis () is used when calling a function

console.log("Hobby:", aboutMe.hobby);