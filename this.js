/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
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

// Principle 2

// code example for Implicit Binding
var me = {
    name: 'Tyler',
    age: 25,
    sayName: function() {
        console.log(this.name);
    }
};

me.sayName();

// Principle 3

// code example for New Binding
var Animal = function(color, name, type) {
this.color = color;
this.name = name;
this.type = type
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// Principle 4

// code example for Explicit Binding
var sayName = function() {
    console.log('My name is ' + this.name);
};

var stacey = {
    name: 'Stacey',
    age: 34
};

sayName.call(stacey);
