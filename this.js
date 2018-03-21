/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If none of the below rules for implicit, new binding or explicit apply, 'this' will be defaulted to the window object unless you use strict mode.
* 2. Implicit Binding - Look to the left of the dot of your invocation (ex: dog.sayName();) so dog is what's being called out. 
* 3. New Binding - When you invoke a function as a new keyword, 'this' keyword inside the function is tied to your new object. 
* 4. Explicit Binding - When you are explicitly stating the 'this' by calling it out (ex: sayName.call(dog));) so in this case you're calling out dog explicitly. It tells the
fucntion what context 'this' will be used for by utilizing call, apply or bind.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1
// code example for Window Binding
var sayAge = function(){
    console.log(this.age);
  };
  
  var me = {
    age: 32
  };
  
  sayAge.call(me);

// Principle 2
// code example for Implicit Binding
var dog = {
    name: 'Comrade Puggington',
    age: 11,
    breed: 'pug',
    sayName: function() {
        console.log(this.breed);
    }
};
dog.sayName();

// Principle 3
// code example for New Binding
// Dog is capitalized to show this is a constructor function
function HappyDog(pug) {
    this.greeting = 'Bark ';
    this.pug = pug;
    this.speak = function() {
      console.log(this.greeting + this.pug);
      console.log(this);
    };
}

const sassy = new HappyDog('Comrade');
const comrade = new HappyDog('Sassy');

comrade.speak();
sassy.speak();

// Principle 4
// code example for Explicit Binding
var sayName = function() {
    console.log('My name is ' + this.name);
};

var dog = {
    name: 'Comrade Puggington', 
    breed: 'pug',
};

sayName.call(dog);