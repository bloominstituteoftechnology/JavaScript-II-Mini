/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window, refers  to the global object and it's scope
* 2. Explicit Binding, when we explicitely pass the this context into another
* 3. Implicit Binding, when we refer directly to an objects method by invoking it, the this value becomes bound to that object
* 4. New, when using a constructor, the this keyword is passed into the newly created object
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1 WINDOW
this.alert('test');

// Principle 2 EXPLICIT
const greetings = function() {
    console.log("Hello " + this.name);
};

const name = {
    name: 'test'
};

greetings.call(name);


// Principle 3 IMPLICIT
let implicitEx = {
    test1: 'test1', 
    test2: 'test2', 
    test3: function(){
        return this.test1 + ' ' + this.test2;
    }
}

console.log(implicitEx.test3());


// Principle 4 NEW
function example(a, b) {
    this.exampleA = a;
    this.exampleB = b;
}

let  newExample = new example('testA' , 'testB'); 
console.log(newExample)
