/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: when used in global scope, not in a function, then 'this' refers to the global window object
* 2. Implicit: when 'this' is used, it refers to the item immediately left of its dot
* 3. New binding: When a constructor function is called with the `new` keyword, `this` refers to the object being constructed
* 4. Explicit binding: When usinc `call()`, `bind()`, and `apply()`, `this` refers to the object passed as an argument
*
* write out a code example of each explanation above
*/

// console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
