/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding:  any object defined in global space bound to window object so this will be window object.
* 2. Implicit binding:  function is bound to it's object scope, i.e. left of dot  
* 3. New binding: constructor funcitons are bound the the newly created object 
* 4. Explicit binding:  Set this by using call, apply and bind.   
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

const myfunc = () => {
  console.log(this); // will return window object
}

// Principle 2

// code example for Implicit Binding

const myObj = {
  myProp: 'awesomeProp!',
  myFunc: function() { console.log(`This is ` + this + `  MyProp is ` + this.myProp) }
}

myObj.myFunc();  // logs This is [object Object]  MyProp is awesomeProp!

// Principle 3

// code example for New Binding

const Obj = function(a, b) {
  this.a = a;
  this.b = b;
}

const myObj2 = new Obj('yo', 'dude');

console.log(`param a is ${myObj2.a} and param b is ${myObj2.b}`); // logs param a is yo and param b is dude



// Principle 4

// code example for Explicit Binding

const theFunc = function() {
  console.log(`me.a is ${me.a} and me.b is ${me.b}`);
}

const me = {
  a: 'it is a!',
  b: 'it is b!'
}

theFunc.apply(me); // logs me.a is it is a! and me.b is it is b!
