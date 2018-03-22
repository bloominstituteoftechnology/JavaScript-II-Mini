/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. using THIS within a function is a window object when using Global functions.  In essence the function will be a method.
* 2. using 'this.*' within a function references the object's variable that is defined earlier in the function  
* 3. using 'this.' followed by an object and its argument to will be created within a Constructor function. 
* 4. using '.call' or '.apply' method followed by an argument passes the value of THIS from one context to another..
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
}
greetMe('Dave');
// Principle 2

// code example for Implicit Binding
var greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}
greetMe.speak('Dave');

var greeting = 'Howdy ',
    greet = greetMe.speak;

greet('Dave');
// Principle 3

// code example for New Binding
GreetMe.prototype.sayGoodbye = function() {
    console.log('Goodbye ' + this.name);
    console.log(this);
};

greetDave.sayGoodbye();
greetHomer.sayGoodbye();

// Principle 4

// code example for Explicit Binding
greetDave.sayGoodbye.call(greetDave);
greetHomer.sayGoodbye.apply(greetHomer);
