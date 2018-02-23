/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when you call the this. on the global scope.
* 2. Implicit binding is when you call the this. inside of an object.
* 3. You use the new keyword when creating an instance of an object class.
* 4. Call/Apply temporarily binds this. to the object passed into it.
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
  const jerry = new CordialPerson({ name: 'Newman' });
  const newman = new CordialPerson({ name: 'Jerry' });
// Principle 4

jerry.speak.call(newman);
newman.speak.apply(jerry);

function Animal(object) {
    this.type = object.type;
    this.name = object.name;
    this.sound = object.sound;
    this.speak = function() {
      return this.sound;
    };
  }

  const doggo = new Animal({ type: 'Dog', name: 'Murphy', sound: 'Woof' });
  const liger = new Animal({
    type: 'LionTiger',
    name: 'Leery',
    sound: 'Roar/Meow'
  });