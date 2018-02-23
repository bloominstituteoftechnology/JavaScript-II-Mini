/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Used in a "first layer" function within the global scope.
* 2. Used with dot notation as an object method.
* 3. Used with the new keyword, as a constructor function;
* 4. Used with .call or .apply.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function globalWindow() {
    console.log(this)
}
globalWindow();

// Principle 2
const dogObj = {
    dogStatus: 'Cute',
    reportDog: function() {
        console.log(`This dog is ${this.dogStatus}`)
    }
};
dogObj.reportDog();
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function DogStatus(cuteness){
    this.prefix = 'This dog is ';
    this.cuteness = cuteness.level
    this.dogCuteness = function() {
        console.log(`This dog is ${this.cuteness}`);
        console.log(this);
    };
}

const uglyDog = new DogStatus({level: 'Ugly'});
uglyDog.dogCuteness();

// Principle 4

// code example for Explicit Binding
