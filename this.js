/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: when invoked outside function scope, then 'this' refers to the global window object
* 2. Implicit: when invoked, it refers to the item immediately left of its dot
* 3. New binding: When a constructor function is called with the `new` keyword, `this` refers to the object being constructed
* 4. Explicit binding: When used in `call()`, `bind()`, and `apply()`, `this` refers to the object passed as an argument
*
* write out a code example of each explanation above
*/

// console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this); //refers to global window object

// Principle 2

// code example for Implicit Binding
function greets(input) {
  console.log(this); //refers to input argument     
}

greets('good morning!');

// Principle 3

// code example for New Binding
let newGreet = function(en, sp, fr){
  this.en= en;
  this.sp= sp;
  this.fr= fr;
};
// Principle 4

// code example for Explicit Binding
const greetObj = {
  en: 'hi'
}

greets.call(greetObj);