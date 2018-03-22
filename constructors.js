// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'

function Animal(options) {
  this.name = options.name;
  this.grow = function () {
        console.log(`${this.name} grew larger!`);
        return `${this.name} grew larger!`;
      }
}

// add 'grow' to Animal's prototype here

// problem #2
// setup Cat to inherit from Animal
// the Animal constructor needs to be invoked with the 'options' argument
// Cat should have its prototype inherit from Animal
// instances of Cat should also have access to the 'grow' method

function Cat(options) {
  // invoke Animal here with .call
  return new Animal(options);
}

// connect the prototypes here

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

// const foofie = new Cat({
//   name: 'foofie',
// });
//
// foofie.grow();
const foofie = new Cat({
    name: 'Foofie',
  });
  
  foofie.grow();
   

