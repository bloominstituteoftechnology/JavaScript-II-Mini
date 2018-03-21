/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* The difference of the principles of this depend on who is the one calling "this"
* 1. If a function is called in the global scope, "this" refers to the window object
* 2. If a function is called by a preceding dot(.), the object before the . is "this"
* 3. If using a constructor, "this" refers to the specific instance of that new object.
* 4. Whenever you use call or apply, you explicitly decide whatever "this" is
*
* write out a code example of each explanation above
*/

console.log('hello world!')

// Principle 1

// code example for Window Binding
function windowBound() {
  console.log(this)
}
windowBound()
// Principle 2

// code example for Implicit Binding
let k = {}
k.variable = 2
k.showVariable = function() {
  console.log(this)
  return this.variable
}
k.showVariable()
// Principle 3

// code example for New Binding
const Person = function() {
  console.log(this)
  this.name = 'newly bound'
}

let me = new Person()
console.log(me.name)
// Principle 4

// code example for Explicit Binding
let arr = [1, 2, 3, 4, 5]
Array.prototype.map.bind(arr, val => console.log(val))
