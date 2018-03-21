/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window:    When not more defined 'this' points to the overall window, or whatever the next order thing bound to it is.
* 2. Implicit:  Where you specify the scope of 'this' with the . syntax.
* 3. New:       Where you specify the scope of 'this' with the 'new' keyword.
* 4. Explicit:  Where yoou specify the scope of this with .call, .apply, or .bind on a function. 
*               It ties the function and object together to be able to use 'this'.
*
* write out a code example of each explanation above
*/

// console.log('hello world!');

// Principle 1

// code example for Window Binding
// function sayName(name) {
//     console.log(this.crazy);
//     return name;
//   }
  
//   window.crazy = "Cruise";
//   sayName("Doesn't matter");
//node does not like window...
  
// Principle 2

// code example for Implicit Binding
const dog = {
    name: "dog",
    fur: "brown",
    command: "woof",
    speak: function() {
      console.log(this.command);
    }
  }
  
  const cat = {
    name: "cat",
    fur: "white",
    command: "meow",
    speak: function() {
      console.log(this.command);
    }
  }
  
  dog.speak();
  cat.speak();
  
  

// Principle 3

// code example for New Binding
constructor
let Animal = function(color, name, type) {
  // this for any new animal
  this.color = color;
  this.name = name;
  this.type = type;
}

let rhino = new Animal('white', 'Bob', 'Mammal');

let gator = new Animal('green', 'Later', 'reptile');


console.log(rhino.color);
console.log(gator.type);

// Principle 4

// code example for Explicit Binding
let me = {
    name: 'Cruise',
    age: 30
  };
  
  let sayName = function(skill1, skill2, skill3) {
    console.log('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', ' + skill2 + ', ' + skill3 );
  }
  
  let skills = ['HTML','CSS','JS'];
  
  sayName.call(me, ...skills );