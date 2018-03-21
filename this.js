/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding - when a function containing the THIS keyword is invoked,
	 					look to the left of the . (period) to see what object THIS is referring to

* 2. Explicit binding - explicitly state what the THIS keyword refers to by using .call / .apply / .bind
						.call arguments must be passed one-by-one or via spread syntax 	(...argumentsArray)
						.apply allows us to pass an array as a list argument 			(array)
						.bind creates a new function for future use

* 3. new Binding - utilizes the NEW keyword to invoke a function which creates a new THIS object

* 4. window Binding - defaults the THIS keyword to the window object

*/

console.log('hello world!');

// Principle 1
// code example for Window Binding
const heyThere = function() {
	console.log('hey, ' + this.name);
}
const me = {
  name: 'jeffrey',
  age: 24
};

heyThere(); //returns 'hey, '
window.name = 'jeffrey';
heyThere(); //returns 'hey, jeffrey'


// Principle 2
// code example fo Implicit Binding
const Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayHi: function() {
      console.log('hey, ' + name);
    }
  }
};
const me = Person('jeffrey', 24);
me.sayHi();


// Principle 3
// code example for New Binding
const Person = function(name, age) {
	this.name = name;
	this.age = age;
};

const me = new Person('jeffrey', 24);

// Principle 4
// code example for Explicit Binding
const heyThere = function() {
	console.log('hey, ' + this.name);
}
const me = {
  name: 'jeffrey',
  age: 24
};
heyThere.call(me);