/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. First principle: Window or console binding. When in the global scope, 'this' 
     will refer to either the window object or the console object.
* 2. Second principle: Implicit binding. The object before the dot in method calls
     is 'this'.
* 3. Third principle: New Binding; When making a new object from a constructor function
     'this' refers the the instance of an object being created.
* 4. Fourth principle: Explicit Binding. 'this' is explicity defined when using call() or apply()
*
* write out a code example of each explanation above
*/

// Principle 1: Window/Console Binding
// code example for Window Binding
function logThis() {
    console.log(this);
    //this simple function will return the global object
    //in the console, it will be the console object
    //in the browser, it will be the window object
    //just a super simple understandable explanation--please share with others
}


// Principle 2: Implicit Binding
// code example for Implicit Binding
const uselessObject = {
    logUselessSelf: function() {
        console.log(this);
    }
    //will log entire useless self out 
}

// Principle 3: New Binding
// code example for New Binding
function OldSchoolConstructor(stuff) {
    this.stuff = stuff;
    this.printStuff = function() {
      console.log(this.stuff);
    };
  }

const myStuff = new OldSchoolConstructor("Don't mess with my stuff!");
myStuff.printStuff();

const evenMoreStuff = new OldSchoolConstructor("You better not ever mess with my stuff!");

// Principle 4: Explicit Binding

// code example for Explicit Binding
