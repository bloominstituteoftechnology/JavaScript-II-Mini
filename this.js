/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - When you call a method on an object, the object named to the left of the dot (at call time), is the reference point for 'this'.)
* 2. Explicit Binding - When you need to explicitly state the this call to pass a variable to a function in the global scope. You can also use 'apply' to parse the arguments and make an array to pass to the function in the global scope. Using '.bind' you can return an entirely new function, rather than invoking the global function already in existence.
* 3. New Binding - When a new object is invoked, the this keyword within the function is bound to the object being constructed. 
* 4. Window Binding - Specifying the this to the window.
*
* write out a code example of each explanation above

// IMPLICIT BINDING

// var person = {
//     name: 'Eric',
//     age: 46, 
//     sayName: function() {
//         console.log(this.name);
//     }
// };

// person.sayName();

// EXPLICIT BINDING 

// CALL - 
// var sayName = function(){
//     console.log('My name is ' + this.name);
// };

// var eric = {
//     name: 'Eric',
//     age: 46, 
// };

// sayName.call(eric);

// APPLY -
// var sayName = function(lang1, lang2, lang3){
//     console.log('My name is ' + this.name + ' and I know ' + lang1 ', ' + lang2 + ', and' _+ lang3);
// };

// var eric = {
//     name: 'Eric',
//     age: 46, 
// };

// var languages = ['JavaScript', 'Python', 'Ruby'];

// sayName.apply(eric, languages);

// BIND
// var sayName = function(lang1, lang2, lang3){
//     console.log('My name is ' + this.name + ' and I know ' + lang1 ', ' + lang2 + ', and' _+ lang3);
// };

// var eric = {
//     name: 'Eric',
//     age: 46, 
// };

// var languages = ['JavaScript', 'Python', 'Ruby'];

// var newFunc = sayName.bind(eric, languages[0], languages[1], languages[2]);

// newFunc();

// NEW BINDING



// WINDOW BINDING

// var sayAge = function(){
//     console.log(this.age);
// };

// var me = {
//     age: 76
// };

// window.age = 55
// sayAge();
// */

console.log('hello world!');

// Principle 1

// code example for Window Binding

var greets = {
    window.firstGreet: 'hello world!'
};

console.log(firstGreet);

// Principle 2

// code example for Implicit Binding

var person = {
    name: 'Eric',
    age: 46, 
    sayName: function() {
        console.log(this.name);
    }
};

person.sayName();


// Principle 3

// code example for New Binding

var Car = function(make, model, type) {
    this.make = make;
    this.model = model;
    this.type = type
};

var sedan = new Car('BMW', 'BMW 5 Series', '530i');

// Principle 4

// code example for Explicit Binding

// CALL  
var sayName = function(){
    console.log('My name is ' + this.name);
};

var eric = {
    name: 'Eric',
    age: 46, 
};

sayName.call(eric);

// APPLY
var sayName = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' and I know ' + lang1 ', ' + lang2 + ', and' _+ lang3);
};

var eric = {
    name: 'Eric',
    age: 46, 
};

//BIND

var sayName = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' and I know ' + lang1 ', ' + lang2 + ', and' _+ lang3);
};

var eric = {
    name: 'Eric',
    age: 46, 
};

