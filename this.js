/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - occurs in browser when not using other bindings, default binding, global
* 2. Implicit - whatever is to the left of the dot is the target
* 3. New Binding - a constructor function that returns an object
* 4. Explicit Binding - when you explicitly pass a this through call(), apply() or bind()
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function coding(language) {
  console.log(this.code);
  return language;
}

window.code = "javascript";
coding("CSS");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
