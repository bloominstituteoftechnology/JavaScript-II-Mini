// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
    constructor(options) {
        this.options = options;
        this.name = name;
    }
}
//NEW STYLE
// class Foo {
//     constructor(x) {
//         this.x = x;
//         this.y = 432;
//     }

//     point() {
//         return 'Foo(' + this.x + ', ' + this.y + ')';
//     }
// }

// let myfoo = new Foo(99);
// console.log(myfoo.point()); // prints "Foo(99, 432)"

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class


// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie',
});

foofie.grow();



