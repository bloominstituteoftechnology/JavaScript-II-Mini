/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - 'this' is bound to the global object. In browser it can be window or module exports in node.
* 2. Implicit Binding - 'this' refers to object on the left side of the dot, usually object calling the method (if its nested object, it will be the one closest to function)
* 3. New Binding - When creating new 'instance' of an object with keyword NEW, 'this' bounds to the new empty object in the moment of creation.
* 4. Explicit Binding - We can use .call, .apply or .bind to explicitly bind 'this' by passing first argument which will point to what 'this' should bind to.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
this.name = "John";
console.log(`hello ${this.name}`);

// Principle 2

// code example for Implicit Binding

const person = {name: "Black", greet: function() {return console.log(`hello ${this.name}`)}};
person.greet();



// Principle 3

// code example for New Binding
const Person = function(name) {
	this.name = name,
	this.greet = function() {
		console.log(`hello ${this.name}`)
	}
}

const newPerson = new Person("Mark");
newPerson.greet();

// Principle 4

// code example for Explicit Binding

function clap() {
	return console.log(`${this.name} clapped his hands`);
}

clap.call(newPerson);
