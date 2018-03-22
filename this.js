/* The 4 principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding will cause the 'this' function to refer to 
the applicaiton frame of wherever you are executing the funciton. Not very Useful! 
* 2. With Implicit Binding, 'this' from an object's method funciton refers to the 
object directly before the '.' when called by a function (ex: me.sayName()). 
It can be called with in a nested funciton also: me.mother.sayName(). 
* 3. New Binding is used to create a bound function that can have new objects 
passed in via 'this'. It can be used with constructor functions in object oriented 
programming to tie changable variables into a related function. It is defined with 
the word 'New' before the bound function. 
* 4. Explicit Binding can be used to override constructor objects by calling the 
funciton explicitly with .call and .apply.  These fucntions are very similar except 
that .call uses a (...__) format or passes in variables listed out. The .apply passes in 
whole arrays.  There is also a .bind that can pass in variables to a funciton like .call 
but is used when defining a new funciton (this seems like a different form of the New Bind function).
*
* write out a code example of each explanation above
*/

// console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayName1(name) {
    console.log(this); // will not refer to Natalie!!!
    return name;
  }
  sayName1("Natalie");
// Principle 2

// code example for Implicit Binding
const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  
  const me = { name: 'Natalie' };
  const you = { name: 'Kia' };
  sayNameFunc(me);
  sayNameFunc(you);
// Principle 3

// code example for New Binding
let myinfo = {
    name: 'Natalie',
    age: 31
  };
  
  let sayName = function(hobby1, hobby2) {
    console.log('My name is ' + this.name + ', I like to ' + hobby1 + ' and ' + hobby2 + '.');
  };
  let sayAge = function(hobby1, hobby2) {
    console.log('My age is ' + this.age + ', I still like to ' + hobby1 + ' and ' + hobby2 + '.');
  };
  
let hobbies = ['study Biology','Cook'];
let newFunction = sayName.bind(myinfo, ...hobbies);
let ageFunc = sayAge.bind(myinfo, ...hobbies); 
newFunction(); 
ageFunc(); 

// Principle 4

// code example for Explicit Binding
/*let myinfo2 = {
    name: 'Natalie',
    age: 31
  };*/
  
  let sayName2 = function(hobby1, hobby2) {
    console.log('My name is ' + this.name + ', I like to ' + hobby1 + ' and ' + hobby2 + '.');
  }
  
 // let hobbies = ['study Biology','Cook'];
  
  sayName2.apply(myinfo, hobbies);