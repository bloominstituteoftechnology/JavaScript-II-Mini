/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the global scope.
* 2. Implicit Binding is when a function is called with a preceding dot (.) and 'this' is on the left
* 3. New Binding is a constructor function witch is a function that returns an object
* 4. Explicit Binding is using the .call() and the .apply() methods
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function animal(animal) {
    console.log(this);
    return animal;
}
animal('Elephant');

// Principle 2

// code example for Implicit Binding
const sayName = obj => {
    obj.name = function() {
        console.log(this);
    };
};
const me = {name: 'Tylar'};
sayName(me);

// Principle 3

// code example for New Binding
const personObj(person) {
    this.hello = 'Hello';
    this.person = person;
    this.talk = function {
        console.log(this.hello + this.person);
        console.log(this);
    };
}
const tylar = new personObj('newperson');
const newperson = personObj('Tylar');
newperson.talk();

// Principle 4

// code example for Explicit Binding
const personObj(person) {
    this.hello = 'Hello';
    this.person = person;
    this.talk = function {
        console.log(this.hello + this.person);
        console.log(this);
    };
}
const tylar = new personObj('newperson');
const newperson = personObj('Tylar');
newperson.talk.call(newperson);
newperson.talk.apply(tylar);