/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding - "this" binds to the global object window if it is not given
	an object to refer to.
* 2. Implicit Binding - "this" is bound to an of an object a method is called on.
	The method does something to its object using "this", which is in the object's scope.
* 3. New Binding - "this" is bound to an instance of an object created by a constructor function. 
* 4. Explicit Binding - "this" is directly bound to a specific object using the call or apply methods.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const robot = {
	status : 'undergoing upgrades',
	speak : function () {
		console.log(`I am currently ${this.status}`);
	}
};

robot.speak(); // 'I am currently undergoing upgrades'

// Principle 3

// code example for New Binding

function Car(wheels, engines, seats) {
	this.wheels = wheels;
	this.engines = engines;
	this.seats = seats;
	this.sound = function () {
		console.log(sound);
	};
}

console.log(new Car(4, 1, 5, 'vroom')); // {wheels: 4, engines: 1, seats: 5, sound: 'vroom'}
// Principle 4

// code example for Explicit Binding

const obj = {fruit: 'banana'};

function identifyThis() {
	console.log(this.fruit);
}

identifyThis.call(obj); // 'banana'