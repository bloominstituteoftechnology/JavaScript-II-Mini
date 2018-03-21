/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. A function that is scoped globaly the value of this will be within the object.
* 2. When a function has a preceding dot the object before the dot is this.
* 3. WHen a function is called this refers to when the object was created and used by the function.
* 4. When call or apply is utilized this is specific to that situtation. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function window() {
    console.log(this);
}
// Principle 2

// code example for Implicit Binding
const theObject = {
    sayHello: 'hello world!',
    helloThis: function() {
        console.log(this);
    }
}
theObject.helloThis();
// Principle 3

// code example for New Binding
class Dog {
    constructor(name){
        this.name =name;
        this.bark = 'woof';
    }
    barkThis() {
        console.log(this);
    }
}
const tailWag = new Dog('Tail Wag');
tailWag.barkThis();
// Principle 4

// code example for Explicit Binding
const sleep = {
    want: 'sleep',
};
const bedThis = function(mattress) {
    console.log('${this.want} ${mattress}');
};
bedThis.call(sleep, 'sleep');
bedThis.apply(sleep, ['sleep']);
const bedThisNeed = bedThis.bind(sleep);
bedThisNeed('sleep');