/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. First principle: Window or console binding. When in the global scope, 'this' 
     will refer to either the window object or the console object.
* 2. Second principle: Implicit binding. The object before the dot in method calls
     is 'this'.
* 3. Third principle: New Binding; When making a new object from a constructor function
     'this' refers the the instance of an object being created.
* 4. Fourth principle: Explicit Binding. 'this' is explicity defined when using call() or apply()
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function logWindowBinding() {
  console.log(this);
}

// Principle 2

// code example for Implicit Binding
function logSelf() {
  console.log(this);
}
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
