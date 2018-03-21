/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When a function is not a property of an object, `this` refers to the global object, or `window`
* 2. Implicit binding: When a method is called on an object, the `this` refers to the object
* 3. New binding: When a constructor function is called with the `new` keyword, `this` refers to the object being constructed
* 4. Explicit binding: When usinc `call()`, `bind()`, and `apply()`, `this` refers to the object passed as an argument
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1
this.count = 50;
let sayCount = () => console.log(this.count);
sayCount();

// Principle 2

const guy = {
    name: "Joe",
    sayName: function() { console.log(this.name) }
}

guy.sayName();

// Principle 3

function Dude(name) {
    this.name = name;
    this.sayName = function() { console.log(this.name) }
}

new Dude("Bob").sayName();

// Principle 4

const sayName = function() { console.log(this.name) };
sayName.bind(guy)();
