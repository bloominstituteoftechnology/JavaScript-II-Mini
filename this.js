/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window
* 2.  Implicit
* 3.  New
* 4.  Explicit
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1
// Window - when in the global scope "this" refers to the Window object
// code example for Window Binding
console.log(this.name);

// Principle 2
// Implicit - a function of an object refers to the object with "this"
// code example for Implicit Binding
let obj = {
  name: 'foo'
  func: () => {
    console.log(this.name);
  }
}

// Principle 3
// New - a constructor creates an object and "this" refers to the created object
// code example for New Binding
let NewObj = function(name) {
  this.name = name;
}
let someObj = new NewObj("foo");

// Principle 4
// Explicit - call and apply make "this" refer to a specific object
// code example for Explicit Binding
let someFunc = function(name) {
  this.name = name;
}
let myObj = {};
someFunc.apply(myObj, 'foo');
