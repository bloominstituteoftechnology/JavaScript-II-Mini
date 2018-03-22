/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding refers to a global context, none of the rules for the other bindings apply.
* 2. Implicit Binding refers to anything left of the .this
* 3. In explicit binding you use .call, .apply, or .bind to call an object
* 4. New binding is when we assign new objects to a function
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this.name);
    return name;
}

window.name = "Justin";
sayName("Justin")

// Principle 2

// code example for Implicit Binding

const justin = {
    talk: "hello",
     saySomething: function() {
         console.log(this.talk)
     }
}

justin.saySomething();

// Principle 3

// code example for New Binding

let Person = function(name, hobby) {
    this.name = name;
    this.hobby = hobby;
}

let justin = new Person('Justin', 'Running');

console.log(justin.name);

// Principle 4

let justin = {
    name: 'Justin',
    age: 28
  };
  
  let example = function(hobby1, hobby2, hobby3) {
    console.log('My name is ' + this.name + ' and my hobbies are ' + hobby1 + ', ' + hobby2 + ', ' + hobby3);
  }
  
  let hobbies = ['running','jumping','flying'];
  
  example.call(justin, ...hobbies);
  
