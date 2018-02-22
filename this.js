/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  
// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter.name;
    this.speak = function() {
      console.log(`Hello, ${this.greeter}`);
      console.log(this);
    };
  }

// Principle 4

function Animal(object) {
    this.type = object.type;
    this.name = object.name;
    this.sound = object.sound;
    this.speak = function() {
      return this.sound;
    };
  }
