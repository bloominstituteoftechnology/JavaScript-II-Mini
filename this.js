/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: when this is called out of the original scope (where it's called) it goes to the global scope and in a browser it goes to the window.
* 2. Implicit: It's the object called before the dot notation.
* 3. New Binding: it refers to something specific using a constructor function
* 4. Explicit Binding: When .call and .apply is explicitly used.
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1 - Window Global Binding

console.log(this);

// Principle 2 - Implicit Binding

const myBike = {
    bike: '10 speed',
    sayBike: function(type) {
        console.log(`this is my ${this.bike}`);
        console.log(this);
    }
};
myBike.sayBike('10 speed');

// Principle 3 - New Binding
function Animal(object) {
    this.type = object.type;
    this.name = object.name;
    this.sound = object.sound;
    this.speak = function() {
        return this.sound;
    };
}
const snake = new Animal({ type: 'coldblooded', name: 'larry', sound: 'bark' });
console.log(snake.speak());
// Principle 4 - Explicit Binding
const  spider = new Animal({ type: 'huntsman', name: 'julie', sound: 'hiss' });
console.log(spider.speak.call(snake));