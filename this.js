/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding:- when in the global scope in the browser, this refers to 'window'
* 2. implicit binding:- when a function is called by a preceding dot, this refers to the object before the dot.
* 3. new binding:- this in this case refers to the object that was created using the constructor function 
* 4. explicit binding:- using call, apply and bind methods
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function newFunction (){
    console.log(this);
}
newFunction();

// Principle 2

// code example for Implicit Binding
const newObj = {
    name: 'nedu',
    age: 20,
    dateOfBirth: function(){
        console.log(`My date of birth is current year - ${this.age}`)
    }
}
newObj.dateOfBirth();

// Principle 3

// code example for New Binding
let newFunction = function (name, age) {
    this.name = name;
    this.age = age;
}

let anotherObject = new newFunction('nedu', 20);

// Principle 4

// code example for Explicit Binding
let newObj = {
    name: 'nedu',
    age: 20
}

let newArray = ['dsf', 'ewfd', 'dfvdc'];

let newFunction = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
}
newFunction.call(newObj, ...newArray);
newFunction.apply(newObj, newArray);
let anotherNewFunction = newFunction.bind(newObj, ...newArray);
