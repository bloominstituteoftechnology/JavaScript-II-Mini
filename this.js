/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: "this" refers to object using dot notation
* 2. Explicit Binding: "this" refers to object using .call, .apply, or .bind
* 3. New Binding: "this" refers to object called with "new" keyword from a construction function
* 4. Window Binding: "this" referring to global object

* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;

sayName("Paul");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayName('Paul');

// Principle 3

// code example for New Binding
function Person(speaker) {
    this.speaker = 'speak';
    this.speaker = speak;
    this.speak = function() {
      console.log(this.speaking + this.speaker);
      console.log(this);
    };
  }
  
  const Paul = new Person('Fang');
  const fang = new Person('Paul');
  

// Principle 4

// code example for Explicit Binding
const sayName = function() { console.log(this.name) };
sayName.bind(guy)();
}