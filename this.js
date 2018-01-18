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

function whatIsThis(){
    consol.log(this);
}
whatIsThis();

// code example for Window Binding

// Principle 2

let newObj = {
    name: 'name',
    whatIsThis: function(){
        console.log(this);
    }
};
newObj.whatIsThis();

// code example for Implicit Binding

// Principle 3

function User(name, pass, email){
    this.username = name;
    this.password = pass;
    this.email = email;
    this.getsPass = function(){
        console.log(`${this.username}, ${this.password}`);
    }
}

let jp = new User('jp', '123456', 'jp@jpemery.com');
let alex = new User('alex', '456123', 'alex@alex.com')
// code example for New Binding

// Principle 4

jp.getsPass.bind(alex);


jp.getsPass.call(alex);

let arr = ['secret', 'anotherSecret']

jp.getsPass.apply(alex, arr);

// code example for Explicit Binding
