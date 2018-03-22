// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
// to test these problems you can run 'node constructors.js' in your terminal
class Animal{
    constructor(options) {
        this.name = options.name;
    
    }

    grow() {
    
        console.log(this.name + ' grew larger');
      
    }
}

  const options = {  // creates a new object called options
    name: 'sally',
  }
  
   let Cheetah = new Animal(options); // creates a new object of animal type
  Cheetah.grow();
  
  // problem #2
  // setup Cat to inherit from Animal
  // the Animal constructor needs to be invoked with the 'options' argument
  // Cat should have its prototype inherit from Animal
  // instances of Cat should also have access to the 'grow' method
  
  class Cat extends Animal {
  constructor(options) {
      super(options)
    // invoke Animal here with .call
  }
}

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class


// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie',
});

foofie.grow();

