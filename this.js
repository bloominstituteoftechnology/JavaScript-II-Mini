/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window / global binding: window/ global binding is when "This" has a value of the window object. 

* 2. implicit binding: Implicit binding can be described as the "this" keyword being set as whatever object preceeds the ".".

* 3. new binding: new binding would be the "this" keyword being set as the "new" instance of the object that is being created from the constructor function. 

* 4. explicit binding: explicit binding is described as having "This" explicitly defined when the call or apply method is used. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function whatsMyName(name) {
    console.log(this);
    return name;
}
whatsMyName("Robert");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
