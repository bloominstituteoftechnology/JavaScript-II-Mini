/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global
  Basically when a (this) is used without anything in context like (this.meow), it will instead go for the Window Object
  which contains pretty much everything in JS. So console logging (this) will show you the values of everything within JS.
* 2. Implicit
  When a (this) is actually being used in a context, with a dot (.) indicating it's being used with a (this).
  For example (this.meow) would be refering to the (meow) value.
* 3. New Binding
  When (this) is being used to create objects, which can be used to make templates.
* 4. Explicit Binding
  Using (this) along with .call or .apply.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const Cat = {
  sound: 'Meow'
  sayMeow: function(options) {
    console.log(`${this.sound}`);
  }
};
// Principle 3

// code example for New Binding
function Dog(stuff) {
  this.bark = "woof";
};

const checkers = new Dog {
  bark: 'meow'
};
// Principle 4

// code example for Explicit Binding

checkers.bark.call();
