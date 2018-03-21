/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding 
* 2. Implicit Binding -- this is when the function is belong to the object
* 3. New Binding --- This is when an object is passed to an constructor
* 4. Explicit Binding --- This is used when you want an object to use a function but does not have the function.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function printName(name) {
    console.log(this.person);
    return name;
}
window.person = 'harry';
printName("D'test");

// Principle 2

// code example for Implicit Binding
const person = {
    firstname: 'Buster',
    lastName: 'Brown',
    printFullName: function() {
        console.log(this.firstname + ' ' + this.lastName);
    }
}
person.printFullName();
// Principle 3

// code example for New Binding

function createMessage(message) {
    this.message = message
    this.printMessage = function() {
        console.log(this.message);
    }
}
const myMessage = new createMessage('Hello World!');
myMessage.printMessage();
// Principle 4

// code example for Explicit Binding
const person2 = {
    firstname: 'Buster',
    lastName: 'Brown',
    printFullName: function() {
        console.log(this.firstname + ' ' + this.lastName);
    }
}
let printN = function() {
    console.log('My name is: ' + this.firstname);
}

printN.call(person2);
