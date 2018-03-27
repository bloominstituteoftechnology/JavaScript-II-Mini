/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding:  when there is no object to point to, this will point to the console it's running on.
* 2. Implicit Binding:  using "this.functionCommand", "this" points to the object on the left.
* 3. New Binding:  Makes the constructor key:values point to the object key:values being constructed
* 4. Explicit Binding:  When we use "this" in a function to point to the object that is specifically being pointed to via .call() .apply() or .bind()
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1
// code example for Window Binding

function someFunction1 () {
    console.log(this);
    return;
};
someFunction1();


// Principle 2
// code example for Implicit Binding

const aboutMe = {
    name: "Aaron",
    age: "36",
    tellMeHappyBirthday: function(name){
        console.log('Happy birthday, ' + this.name + '!  You are no longer ' + (this.age) + ' years old!');
    }
};
aboutMe.tellMeHappyBirthday();


// Principle 3
// code example for New Binding
function terminatorConstructor(type, purpose, faction){
    this.type = type;
    this.purpose = purpose;
    this.faction = faction;
    this.declaration = function() {
        console.log("I am a " + this.type + ".  My purpose is " + this.purpose + ".  I serve " + this.faction + ".");
        //console.log(this);
    }
}
const terminator1 = new terminatorConstructor('T-100', 'to seek out and terminate Sarah Connor', 'SkyNet');
const terminator2 = new terminatorConstructor('reprogrammed T-100', 'to seek out and protect John Connor', 'humans');
const terminator3 = new terminatorConstructor('T-1000', 'to look cool, and to seek out and terminate Sarah Connor', 'SkyNet');

terminator1.declaration();
//terminator2.declaration();
terminator3.declaration();

// Principle 4
// code example for Explicit Binding
terminator1.declaration.call(terminator2);
