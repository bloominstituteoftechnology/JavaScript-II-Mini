/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window/Global object Binding Principle - When 'this' is used in the global scope, it will refer to the console object.
* 2. Implicit Binding Principle - When a function is called, the 'this' in the function refers to the object that the function is being called on.
* 3. New Binding Principle - When 'this' is used, it refers to the instance of the object that the constructor is creating.
* 4. Explicit Binding Principle - This principle focuses on the ability to override a constructor using the methods (call, apply, and bind) using explicit or precise elements to replace the constructor instances.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const cheeseMenu = {
    cheese1: chedder,
    cheese2: blue,
    cheese3: American,
    pickCheese: function() {
        console.log('I want ' + this.cheese2 + ' cheese with my chicken wings!');
    }
}

cheeseMenu.pickCheese();

// Principle 3

// code example for New Binding

const Towels = {
    color: this.color,
    purchasedFrom: this.purchasedFrom,
    length: this.length,
}

let myTowel = new Towel('blue', 'Target', 'long');

// Principle 4

// code example for Explicit Binding

const sandwich = {
    slice1: bread,
    middle: pb,
    slice2: bread,
}

const makeSandwich = () => {
    console.log('Making a sandwich requires ' + this.slice1 + ',' + this.middle + ' and' + this.slice2);
}

makeSandwich.apply(sandwich);
