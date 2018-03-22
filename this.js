/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Explicit Binding - Using the context of what the keyword should be Call, Apply or Bind

* 2. Implicit Binding - Invoking the object left of the dot

* 3. New Binding - A given constructor will invoke a brand new Object in alphabetical order. Or when the new function in invoked with new keyword, that keyword inside the function is bond to the new Object being constructed

* 4. Window Binding - Referencing a keyword inside the function, it will default to the 'window' keyword object
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

var sayAge = function() {
    console.log(this.age);
    };
        var me = {
        age: 25
        };
    
sayAge();
window.age = 35;
sayAge();
//output - undefined
// 35

// Principle 2

// code example for Implicit Binding

const dog = {
    name: "Kenzie",
    breed: "collie",
    color: "black",
    voice: function() {
        console.log(this.breed);
    }
}
dog.breed();
//output "collie"


// Principle 3

// code example for New Binding

var Dog = function(breed, age, color) {
    this.breed = breed;
    this.age = age;
    this.color = color
  };

var Kenzie = new Dog('collie', '8', 'black');
  console.log(Kenzie);

// output [object Object] {
// age: “8”,
// breed: “collie”,
// color: “black”

// Principle 4

// code example for Explicit Binding

//     CALL
var sayName = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' +  lang1 + ', ' + lang2 + ', and ' + lang3);
    };

var amanda = {
    name: 'Amanda',
    age: 18,
};

var languages = ['Javascript', 'Ruby', 'Flexbox'];

sayName.call(amanda, languages[0], languages[1], languages[2]);
//output “My name is Amanda and I know Javascript, Ruby, and Flexbox”

//     APPLY
var sayName = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' +  lang1 + ', ' + lang2 + ', and ' + lang3);
    };
var amanda = {
  name: 'Amanda',
  age: 18,
    };
var languages = ['Javascript', 'Ruby', 'Flexbox'];

sayName.apply(amanda, languages)
//output “My name is Amanda and I know Javascript, Ruby, and Flexbox”


//   BIND
var sayName = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' +  lang1 + ', ' + lang2 + ', and ' + lang3);
    };
var amanda = {
    name: 'Amanda',
    age: 18,
    };
var languages = ['Javascript', 'Ruby', 'Flexbox'];

var newFunction = sayName.bind(amanda, languages[0], languages[1], languages[2])
console.log("NOW");
newFunction();
//output "NOW"
//output "My name is Amanda and I know Javascript, Ruby, and Flexbox"