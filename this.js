/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* this keyword have 4 scopes.
* 1. Global Scope
in global scope the this keyword points to the global object in system it is windows object and in a browser its browser object. 
if we have not binded the object to any other object implicitly its this scope will be the global. 

* 2. Implicit binding scope
implicit binding is when we invoke this keyword within a method of any object. In this case every first child method, its this will point to the object itself. 
if we have any inner object inside a object the this points to the global object. 

* 3. Explicit binding scope 
Explicit binding is when we use call , apply or bind to any function. we define what the this keyword will point to in the first parameter of call, apply and bind. 

* 4. New keyword binding scope
this is when we use a constructor function to create new objects, and then, this keyword points to the parameter passed into the constructor.
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this) // here this is the window object.

// Principle 2

// code example for Implicit Binding
let newObj = {
    name: 'imran', 
    age: 30, 
    getAgeAndName: function(){
        return this.name + ' ' + this.age; // here this points to the newObj(parent object);
        child: function any(){
            console.log(this);  // but here this will be the global object(window);
        }
    }
}

// Principle 3

// code example for New Binding
function ConstExample(param1, param2) {
    this.name = param1; // here this points to the parameter passed 
    this.age = param2;
}

let childObj = new ConstExample('imran' , 30); 
console.log(childObj) // ---> {name: imran, age: 30}

// Principle 4

// code example for Explicit Binding

function any(param1, param2){
    return this.name + ' ' + this.age + 'and i like to ' + param1 + 'and' + param2; 
}

let testObj = {
    name: 'imran', 
    age: 30
}; 


let testparams = ['code', 'music' ]; 
                    //call example
// here we are setting the this of any() to testObj1, note the this.age and param2 will return undefined;
console.log(any.call(testObj, 'code')); 


                    //apply example
// same as call , but expects an array as parameter. 
//call and apply both invokes the any();                    
console.log(any.apply(testObj, testparams)) 


                    // bind example
//unlike call and apply it creates another version of the function(any()), and dose not invoke the newly created function. 
//we can use a variable to capture the newly created function with the this keyword specified to a object. 
//this new funciton whenever we invoke will always point to the testObj as its this . And we can pass parameter to the newly created function. 
let bindTest = (any.bind(testObj));
console.log(bindTest('code'))                 