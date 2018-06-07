/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this);
// that is window binding in its fineist window is just that your window
// the window object is your browsers 'window' into the web
// when you load any web page all the objects and code are bound to your window
// while you are there that command will show you everything that is in your browsers window
// go try it out in your dev tools console and enjoy

// Principle 2

// code example for Implicit Binding

let ranObj = {
    words: 'blablabla',
    numbers: 123456,
    sayWords: function() { console.log(this.words); } //Implicit Binding of this
}
ranObj.sayWords(); // this is refering to ranObj because its to the left of the dot
// Principle 3

// code example for New Binding
let Binding = function(uname, pass) {
    this.username = uname,
    this.password = pass
}; 
let someUser = new Binding(admin, password);
// in this example with the Binding class object this does not have a refrence 
// untill it is invoked in a new obj someUser now in someUser this refeers to
// the new object the constructor this can be reused as many times as you want to
// make new objects if someUser was named cory then this.username would be 
// read like cory.username 
// Principle 4

// code example for Explicit Binding
fakeFunction.call(whatthispointsto) // im using call to change the way this behaves
// in this example the fakeFunction would be a global function with this
// but instead of checking to the left to findout what it means
// the use of call / bind / apply will point it to the first variable 
// in the () of said operator [call in this case] if we look at the ranObj
// we could just take the function out and have it be a stand alone global
// and just do sayWords.call(ranObj) and that would be the same as 
// ranObj.sayWords()
