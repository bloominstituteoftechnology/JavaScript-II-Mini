// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
    constructor(animalAttrs) {
      this.species = animalAttrs.species;
      this.name = animalAttrs.name;
    }
    grow() {
      console.log(`${this.name} grew larger!`);
    }
    greeting() {
      console.log(`${this.name} says ${this.speak}!`);
    }
  }
  
  // problem #2
  // convert the Cat constructor function from 'constructors.js' into an ES6 class
  class Cat extends Animal {
    super(catAttributes) {
      this.speak = catAttributes.speak;
      this.getsHairballs = catAttributes.getsHairballs;
    }
  }
  
  // if everything is setup properly the code below will print 'Foofie grew larger!'
  // uncomment the code below to test your solution
  
  const foofie = new Cat({
    name: 'foofie',
  });
  
  foofie.grow();