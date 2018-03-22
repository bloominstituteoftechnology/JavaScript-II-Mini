/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - this refers to the object it is wrapped in, when it isnt in any particular object
            it defaults to the global scope object i.e. window object. In here we can use object
            to interact with the window's properties.

* 2. new -  Used for constructors, makes this's scope limited to the object created. Useful when making
            classes as it can allow us to make default properties at the same time the instance of a 
            class is made.

* 3. implicit - when this is used in an object, it will refer to that object's properties when used.
            This is useful for when u want to refer to a value that can change.

* 4. explicit - when this is used in a function however, it would still default to the window object.
            In this case, if u use .call .apply .something u can tell this to refer to the desired 
            object and change its reference point.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

this.alert('Hello');

// Principle 2

// code example for Implicit Binding

const myObj = {
    name: 'Justin',
    age: 23,
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

// Principle 3

// code example for New Binding

const Person = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
};

const justin = new Person('Justin', 23, 'Male');
justin.greet();

// Principle 4

// code example for Explicit Binding

const hey = function greets() {
    console.log(`Hello, my name is ${this.name}`);
};

const mine = {
    name: 'Justin'
};

hey.call(mine);