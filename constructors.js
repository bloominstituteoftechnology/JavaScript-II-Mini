// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'

function Animal(options) {
    this.name = options.name;
  }
  
  // add 'grow' to Animal's prototype here
  Animal.prototype.grow = () => {
    console.log(`${this.name} grew larger!`);
  };

  // test obect
  //const frog = new Animal({
    //  name: "timmy the frog",
 // });


  // problem #2
  // setup Cat to inherit from Animal
  // the Animal constructor needs to be invoked with the 'options' argument
  // Cat should have its prototype inherit from Animal
  // instances of Cat should also have access to the 'grow' method
  
  // connect the prototypes here
  function Cat(options) {
      
  }
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  Cat.parent = Animal.prototype;
  
  
  // if everything is setup properly the code below will print 'Foofie grew larger!'
  // uncomment the code below to test your solution
  
const foofie = new Cat({
  name: 'foofie',
});
  //
foofie.grow();
  