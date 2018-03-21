/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit Binding - Context is given to the item to the left of the dot at call time.
 * 2. Explicit Binding - Context is given using the 1st arg in '.call', '.apply', or '.bind' methods.
 * 3. 'new' Binding    - Context is given to the new object created by the variable it is invoked with, creating a new object.
 * 4. 'window' Binding - Context is 'window' by default if there are no other possible options (global scope).
 *
 * write out a code example of each explanation above
 */

console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this + ' window binding here');

// Principle 2

// code example for Implicit Binding
function prin2() {
    console.log(this.a);
}
const obj = {
    a: 'implicit binding used here',
    prin2: prin2,
};
obj.prin2();


// Principle 3

// code example for New Binding
function prin3(a) {
    this.a = a;
}
const bar = new prin3('new binding used here');
console.log(bar.a);

// Principle 4

// code example for Explicit Binding
function prin4() {
    console.log(this.a);
}
const prin4Obj = {
    a: 'explicit binding using .call here',
};
prin4.call(prin4Obj);
