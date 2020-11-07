class Person {
    constructor(name, age) {
this.name = name;
this.age = age;
    }
    greeting() {
        console.log(`your name is ${this.name} and you is ${this.age}`)
    }
}
// export it to use other places
module.exports = Person; 

// classes and methods 