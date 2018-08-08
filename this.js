/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window binding is the basic version of this, so if you refer to this and it isn't pointing towards a specific object it'll be referring to the window by default
* 2. Implicit binding is done when referring to properties inside an object from within that object using dots(/brackets?)
* 3. Using new lets you utilize constructors that build new objects based on a... base
* 4. Explicit binding lets you use "this" to refer to properties of a different object by passing them into a function using .call .apply or .bind
*
* write out a code example of each explanation above
*/

console.log('hello world!');


// Principle 1
console.log(this);
// code example for Window Binding


// Principle 2
const sushi = {
    bestkind: "salmon",
    worstkind: "nonexistent",
    bestworst: function () {
        return "The best kind of sushi is " + this.bestkind + " and the worst kind is " + this.worstkind;
    }
}

console.log(sushi.bestworst());
// code example for Implicit Binding


// Principle 3
let Food = function (tastiness, texturiousness, scrumptiouslevels) {
    this.tastiness = tastiness;
    this.texturiousness = texturiousness;
    this.scrumptiouslevels = scrumptiouslevels;
}

let tacos = new Food('pretty good', '"taco-ish"', '6/10');

console.log(tacos);
// code example for New Binding


// Principle 4
let instruments = {
    nice: 'piano',
    screech: 'violin'
}

const screech = function () {
    console.log('The screechiest instrument is the ' + this.screech);
}

screech.call(instruments);
// code example for Explicit Binding
