/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - In global scope, 'this' value is the console Object.
* 2. Implicit Binding - When a function within an object is called with a preceeding dot, the object before is 'this'
* 3. New Binding - When a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - When using call or apply methods, 'this' is explicitly defined.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1 - WINDOW BINDING

// code example for Window Binding
function washThe(thingToBeWashed) {
    console.log(this.thing);
    return thingToBeWashed;
};

washThe("windows");

// Principle 2 - IMPLICIT BINDING

// code example for Implicit Binding
const exObj = {
    greet: 'Hi',
    sayHi: function(name) {
        console.log(`${this.greet} my name is ${name}`);
        console.log(this);
    }
};

exObj.sayHi('Claudio');

// Principle 3 - NEW BINDING

// code example for New Binding
function meanPerson(greeting, meanie, time) {
    this.greeting = greeting;    
    this.meanie = meanie;
    this.time = time;
    this.speak = function() {
        console.log(this.greeting + this.meanie + this.time);
        console.log(this);
    };
};

let mean = new meanPerson('Hi', 'Bob', 'now')
console.log(mean.time);

// Principle 4 - EXPLICIT BINDING

// code example for Explicit Binding
let me = {
    name: 'Claudio',
    age: 27
};

let sayName = (place1, place2, place3) => {
    console.log('Hi my name is ' + this.name + ', Im ' + this.age + ' and Ive been to: ' + place1 + ', ' + place2 + ', ' + place3);
}

let places = ['Torrance', 'London', 'Tokyo']

sayName.call(me, ...places)




