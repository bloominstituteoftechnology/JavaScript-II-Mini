/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the this keyword refers to the global object that it is within the scope of.
* 2. Implicit binding is when the this keyword is used with a function that is preceded by a dot notation.
* 3. New binding utilizes the new keyword in conjunction with constructors to make a new object.
* 4. Explicit binding is when the this keyword is coupled with a call or apply method thus overriding the context for the global object.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayName(name) {
    return name;
}
sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayName('Ryan');

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

newman.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding
let sayName = () => {
    console.log('Myname is: ' + this.name);
};

// Call

let me = {
    name: 'Josh',
    age: 33
};

let sayName = function(skill1, skill2, skill3) {
    console.log ('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', '
+ skill2 + ', ' + skill3 );
}

let skills = ['HTML','CSS','JS'];

sayName.call(me, ...skills );