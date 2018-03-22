/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: In this case 'this' is usually the window object that executes you code. Ultimately it binds to the global object.
* 2. Implicit Binding: When applying a method 'this' pertains to what is left of the dot.
* 3. New Binding: When creating something using the 'new' keyword 'this' related to the newly created data.
* 4. Explicit Binding: This type ofbinding happens when using .call() and .apply(). This is very similar to implicit binding but essentially reorients the focus of 'this'.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1: code example for Window Binding
function logWindow() {
  console.log(this);
}

// Principle 2: code example for Implicit Binding
const bob = {
  name: 'Bob',

  sayName() {
    console.log(this.name);
  } 
}

// Principle 3: code example for New Binding
function Person(name) {
  this.name = name;
}

const bobette = new Person('Bobette');

// Principle 4: code example for Explicit Binding

bob.sayName.call(bobette);
