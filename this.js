/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - using this as it refers to the window object
* 2. Implicit binding - within the context of an object, this represents an object
* 3. New Binding - used in the creation of objects from constructors
* 4. Explicit binding - use of .call .apply or .bind to assign an object for a functions this reference, do exactly this but with each item of an array, or assign an object for a functions this reference and create a new function.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

Function sayName (name) {
    console.log(this);
    Return name;
}

sayName('billy');

// Principle 2

// code example for Implicit Binding
const animal = {
    Name: dog,
    Fur: brown,
    Command: "woof",
    Bark: function() {
        console.log(this.command);
    }
}

animal.bark();


// Principle 3

// code example for New Binding

Var Animal = function(coler, name, type) {
    This.color = color;
    This.name = name;
    This.type = type;
}

var bird = new Animal ('black', 'Toucan Sam', 'Bird');

// Principle 4

// code example for Explicit Binding
// using .call
Let me = {
    Name: 'Nalee',
    Age: 23;
}

Let sayName = function() {
    console.log('My Name is: ' + this.name);
}

sayName.call(me);