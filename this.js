/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit - when used from within an object, this refers to the object in which it is being used
* 2. explicit - .call , .apply, .bind
* 3. window/global - if binding is not specified then this refers to window which is the global object
* 4. new keyword - when used in a constructor function, this refers to the new object that will be created using the constructor
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayHello(myObj)
console.log('Hello ' + this.name);
// window.name = 'Iqra';
// Principle 2

// code example for Implicit Binding
const me = {
    name: 'Iqra',
    sayHello: function() {
        console.log('Hi ' + this.name)
    }
}

// Principle 3

// code example for New Binding
const User = function (username, password) {
    this.username = username;
    this.password = password;
}
const newUser1 = new User ('iqra', 'shjkhsf');
console.log(newUser1);

// Principle 4

// code example for Explicit Binding

const myPet = {
    name: 'Simba',
    age: 5
}

function myCat() {
    console.log(`my cat's name is ${this.name}`)
}
myCat.call(myPet);