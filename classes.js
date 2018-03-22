// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
    constructor(options) {
        this.name = options.name
    }

    grow() {
        console.log(`${this.name} grew larger!`);
    }
}

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class

class Cat extends Animal {  //makes Cat a child class of Animal
    constructor(options) {
        super(options);  //uses the constructor code from the parent Animal
    }
}

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
    name: 'foofie',
});

foofie.grow();  //child Cat has access to Parent functions
