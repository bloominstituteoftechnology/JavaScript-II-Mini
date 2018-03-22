// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
      constructor(options, name) {
        this.options = options;
        this.name = options.name;
      }
      grow() {
            console.log(`${this.name} grew larger!`);
            return `${this.name} grew larger!`;
          }





// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class
class Cat extends Animal {
      constructor(options, name, age) {
        super(options, name, age);
        this.options = options;
        this.name = options.name;
        this.age = options.age;
      }
    
      meow() {
        return `${this.name} meowed!`;
      }

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

// const foofie = new Cat({
//   name: 'foofie',
// });
//
// foofie.grow();

