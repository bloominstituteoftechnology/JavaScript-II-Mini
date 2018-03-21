/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The global scope of this is calling on properties of the window object.
* 2. Explicit -
* 3. Implicit - calling from within
* 4. new - 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const me = {
    name: 'Matthias',
    hello: function() {
        console.log(`Hi, ${this.name}`)
    }
};
// Principle 3

// code example for New Binding
const Animal = function(color, name, eats) {
    this.color = color;
    this.name = name;
    this.eats = eats;
};

const giraf = new Animal('Spotted', 'Frankie', 'Babies');
// Principle 4

// code example for Explicit Binding
let sayName = function (skill1, skill2, skill3) {
    console.log(`My name is ${this.name} and I like to program with ${skill1}, ${skill2} and ${skill3}.`);
};

let skills = ['HTML', 'CSS', 'JS']

sayName.apply(me, skills);