/* The for principles of "this";
newFunction();

function newFunction() {
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The 'this' keyword defaults to the global scope which is the window or console.
* 2. The 'this' keyword is implicitly refers to the object in which it is being called.
* 3. When a new object is created by the 'new' keyword, the 'this' keyword refers to the new object.
* 4. When using the 'call' or 'apply' function, the 'this' context for the 'this keyword is explicity defined.
*
* write out a code example of each explanation above
*/
// Principle 1:  // code example for Window Binding: 

console.log("This is:, " this);

// Principle 2: code example for Implicit Binding

let live = {
    money: true,
    shop: function() {
        if (this.money = true) {
            console.log("Let's shop!")
        }
    }
}
live.shop();

// Principle 3: code example for New Binding
function live () {
    this.name = name;
    this.money = true;
    this.shop = function () {
        if (this.money = true) {
            console.log(`Let ${this.name} shop!`);
        }
    }
}
const mylive = new live ({
    name: 'June'
})

mylive.shop();

// Principle 4: code example for Explicit Binding


