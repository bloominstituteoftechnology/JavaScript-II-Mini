/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: when this is not binding to any ohter context then it is binded to the window object.
* 2. Implicit Binding: Lef of the Dot at call time
* 3. new Binding: when a fucntion is invoked by a new constructed object 'this' keyword referes to that new object.
* 4. Explicit Binding: it referes to the context on which the function is operating
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

const callAge = () => {
    console.log(`I am ${this.age}`);
};
window.age = 'very old!';
callAge();



// Principle 2

// code example for Implicit Binding
const person = {
    name: ajmal,
    age: 28,
    callName: () => {
        console.log(this.name);
    } 
};
person.callName(); 

// Principle 3

// code example for New Binding

const Person = (name, age,) => {
    this.name = name;
    this.age = age;
    callName = () => {
        console.log(`My name is ${this.name}`);
    };
};
const ajmal = new Person(ajmal, 28);
ajmal.callName();

// Principle 4

// code example for Explicit Binding

const callName = () => {
    console.log(`My name is ${this.name}`);
};
const person1 = {
    name: ajmal,
    age: 28,
};
callName.call(peron1);
