/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function sayPhrase(greeting) {
    return greeting;
}
sayPhrase('hello world');

// Principle 2

// code example for Implicit Binding

const myPhrase = {
    greeting: 'hey!',
    sayHello: function(phrase) {
        console.log(`${this.greeting}`);
    }
}
myPhrase.sayHello('hey');

// Principle 3

// code example for New Binding

function NewPerson(instructor) {
    this.subject = 'Coding Instructor, ';
    this.instructor = instructor.name;
    this.speak = function () {
        console.log(this.subject + this.instructor);
    };
}

const jerry = new NewPerson({name: 'Petty Betty'});

jerry.speak();

// Principle 4

// code example for Explicit Binding

function House(obj) {
    this.type = obj.type;
    this.name = obj.name;
    this.color = obj.color;
    this.style = function () {
        return this.color;
    };
}

const capeCod = new House ({ type: 'oneStory', name: 'Ariel', color: 'blue' });
const victorian = new House ({
    type: 'threeStory',
    name: 'Sebastian',
    color: 'teal'
});


capeCod.style();
victorian.style();


console.log(capeCod)