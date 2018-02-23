/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in global scope, this refers to the window/console
* 2. Implicit Binding: When a function is called by an object, that object to the left of the dot is 'this'.
* 3. New Binding: When a constructor is used, this refers to the new object that is returned by the constructor.
* 4. Explicit Binding: Whenever .call or .apply methods are used. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
const windowBinding = name => {
    console.log(this);
    return name;
}

windowBinding('Zack');

// Principle 2

// code example for Implicit Binding

const implicitBinding = obj => {
    obj.sayName = function() {
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    };
}

const me = {name: 'Zack'};
implicitBinding(me);
me.sayName();

// Principle 3

// code example for New Binding

function NewBinding(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter.name;
    this.speak = function() {
        console.log(`${this.greeting}, ${this.greeter}`);
        console.log(this);
    };
}

const zack = new NewBinding({name: 'Zack'});
zack.speak();
const elvis = new NewBinding({name: 'Elvis'});
elvis.speak();

// Principle 4

// code example for Explicit Binding
//using NewBinding above:
zack.speak.call(elvis);
elvis.speak.apply(zack);

class Animal {
    constructor(object) {
        this.type = object.type;
        this.name = object.name;
        this.sound = object.sound;
    }
    speak() {
        return this.sound;
    }
}

const pupper = new Animal({type: 'Pupper', name: 'Elvis', sound: 'Ruff'});
console.log(pupper);
const doggo = new Animal({type: 'Doggo', name: 'Oreo', sound: 'Woof'});
console.log(doggo);

console.log(pupper.speak());
console.log(doggo.speak.call(pupper));


