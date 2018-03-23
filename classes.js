// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class classAnimal {
  Animal(options) {
    this.name = options.name;
    this.grow=options.grow;
  }
}


// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class
class classCat extends classAnimal {
  Cat(options) {
    super(options)
    this.isclassCat = options.isclassCat;
  }
}


// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

// const foofie = new Cat({
//   name: 'foofie',
// });
//
// foofie.grow();
