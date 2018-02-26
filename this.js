/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Object binding - refers to global
* 2. Implicit - bind to the obj name on the left of the period
* 3. New Binding - bind this to the constructor func
* 4. Explicit - passes the obj that it has to bind to by using .call /.apply / .bind
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function globalBind (name) {
    console.log(name);
    console.log(this);
}

// Principle 2

// code example for Implicit Binding

const edward = {
    firstName: 'Edward',
    lastName: 'Manda',
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

edward.fullName();

// Principle 3

// code example for New Binding
function Person (personObj) {
    this.firstName = personObj.firstName;
    this.lastName = personObj.lastName;
    this.fullName = function() {
        console.log(`${this.firstName} ${this.lastName}`)
    };
}
 const john = new Person({firstName: 'John', lastName: 'Huggett',});
john.fullName();



// Principle 4
edward.fullName.apply({firstName: 'Petter', lastName: 'Huggett',});

// code example for Explicit Binding
