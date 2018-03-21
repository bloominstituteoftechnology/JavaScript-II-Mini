/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value here will be the same as the Object of the window.
* 2. In an inplicit binding, it takes in an object as the argument and depending on which object it is, there is a different meaning of this everytime it's logged out.
* 3. A new binding is used with constructor functions and speaks about the object that is crreated abd returned in that function.
* 4. It is explicitly called with the .call or .apply methods.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayHi(greetings) {
    console.log(this);
    return greetings;
}
sayHi('Hi there!');

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding
function cringyPerson(dabber) {
    this.greeting = 'Aye wassup man ';
    this.dabber = dabber;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

// Principle 4

// code example for Explicit Binding
john.run.apply(running);