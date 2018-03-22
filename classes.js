// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
    constructor(params) {
        this.name = params.name;
    }
    grow () {
        `${this.name} grew larger!`;
    }
} 

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class

class Cat extends Animal {
    constructor(params) {
        super(params); 
    }
}
// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie',
});

foofie.grow();

