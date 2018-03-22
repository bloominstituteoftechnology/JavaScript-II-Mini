/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding - Most common use of this. When a function is invoked, look to the left of the dot. You can call a function without referencing the object.
* 2. Explicit binding - You can use .call, .apply, and .bind. .call is a feature attached to functions that lets you call information from different places. .apply is the same as .call but makes it so you can pass in an entire array without calling them individually. .bind is the same as .call but returns a new function that you can use later instead of just invoking
* 3. New binding - Creates a new object.
* 4. Window binding - this is the global scope. Not sure what value it has or when it would be used.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1
// code example for Window Binding
console.log(this);


// Principle 2
// code example for Implicit Binding
let obj1 = {
  name: 'John',
  printName: function(){
  console.log('Hi, my name is ' + this.name);
  }
}
let obj2 = {
  name: 'Kyle',
  printName: function(){
    console.log('Hi, my name is ' + this.name);
  }
}

obj1.printName();
obj2.printName();

// Principle 3
// code example for New Binding
let people = function(name, age, haircolor){
    this.name = name;
    this.age = age;
    this.haircolor = haircolor;
  };
  
  let me = new people('Keith', 26, 'brown');
  console.log(me);

// Principle 4
// code example for Explicit Binding
let bestCSLang = function(item1, item2, item3, item4){
    console.log('I think ' + this.cpp + '' + item1 + item2 + item3 + item4);
  }
  
  let csObject = {
    cpp: 'cpp is not fun',
    js: 'js is not fun',
    html: 'html is easy',
    css: 'css is fun',
  }
  
  let csArray = [' but', ' it', ' is', ' useful'];
  bestCSLang.apply(csObject, csArray);