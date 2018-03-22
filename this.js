/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding refers to the value of "this" in the global scope.  "This" points to objects, so if there is no object that it's pointing to, it will point to the console.
* 2. Implicit Binding is the most common way of seeing how "this" is used.  Basically if you ever wonder what "this" is referring to, just go straight to the function invocation and look at what is directly to the left of the dot.  This will tell you what "this" is referring to.
* 3. New Binding refers to the "new" keyword being used when a function is invoked.  This causes the "this" keyword to bind to the new object being constructed.
* 4. Explcisit Binding utilizes three properties; .call, .apply, and .bind.  The .call passes an argument in 1 by 1.  The .apply passes an array of arguments.  While .bind is like .call but it will return a new function instead of invoking the original function.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayGreeting(str) {
    console.log(this);
    return str;
}
sayGreeting('hello world!');

// Principle 2

// code example for Implicit Binding
const foodObj = {
    greet: 'hello world!',
    greeting: function() {
      console.log(this.greet);
    }
  }
  
  foodObj.greeting();
  

// Principle 3

// code example for New Binding
let Plant = function(type, color, name, greet) {
    this.type = type;
    this.color= color;
    this.name = name;
    this.greet = greet;
  }
  
  let apple = new Plant('fruit', 'green', 'apple', 'hello world!');
  
  console.log(apple.greet);

// Principle 4

// code example for Explicit Binding

// .call
var catGreet = function () {
    console.log("My name is " + this.name + " I like to say: " + this.greet);
  };
  var cat = {
    name: "Marshmallow",
    greet: 'hello world!'
  };
  catGreet.call(cat); 

// .apply
  var catToys = function (toy1, toy2) {
    console.log('I like to say: ' + this.greet+ ' to my ' + toy1+ " and " + toy2);
  };
  var cat = {
    name: "Marshmallow",
    greet: 'hello world!'
  };
  var toys = ["yarn", "bells"]
  catToys.apply(cat, toys);

  // .bind
  var catToys = function (toy1, toy2) {
    console.log('I like to say: ' + this.greet+ ' to my ' + toy1+ " and " + toy2);
  };
  var cat = {
    name: "Marshmallow",
    greet: 'hello world!'
  };
  var toys = ["yarn", "bells"]

  var newFunction = catToys.bind(cat, ...toys);

  newFunction();

  
