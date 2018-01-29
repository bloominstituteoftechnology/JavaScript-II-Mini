/* eslint-disable */
// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'
// Prototype is an SPECIAL Obj that is assigned objects when are created
// We use the protype to pass on abilities to child objects;

////pseudoclassical inheritance ///

function Animal(options) {
  this.name = options.name; 
	this.species = options.species;
}

Animal.prototype.grow = function() {
	console.log (`${this.name} grew larger`); 
};

Animal.prototype.greeting = function() {
   console.log (`${this.name} says ${this.speak}`);
};

function Dog(dogAttributes) {
  Animal.call(this, dogAttributes);
	this.speak = dogAttributes.speak;
	this.waggyTail = dogAttributes.waggyTail;
}

Dog.prototype = Object.create(Animal.prototype);
const grizzly = new Dog({
	species: 'Canis cutues',
	name: 'Grizzly Bear',
	speak: 'woof',
	waggyTail: true,
});

grizzly.grow();
//console.log(grizzly);

// add 'grow' to Animal's prototype here

// problem #2
// setup Cat to inherit from Animal
// the Animal constructor needs to be invoked with the 'options' argument
// Cat should have its prototype inherit from Animal
// instances of Cat should also have access to the 'grow' method

function Cat(catAttributes) {
	 Animal.call(this, catAttributes);
	 this.speak = catAttributes.speak;
	 this.waggyTail = catAttributes.waggyTail;

  // invoke Animal here with .call
}

Cat.prototype = Object.create(Animal.prototype);
  const CaptainHook = new Cat({
	species: 'Felus totes cutum',
	name: 'foffie', 
  meow: 'Meow',
  waggyTail: false,
  });
// connect the prototypes here

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
    species: 'Felus totes cutum',
    name: 'foofie',
		speak: 'Meow',
		waggyTail: false,
 });

foofie.grow();
//console.log(foofie);
foofie.greeting();

