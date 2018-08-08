/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window / global binding: window/ global binding is when "This" has a value of the window object. 

* 2. implicit binding: Implicit binding can be described as the "this" keyword being set as whatever object preceeds the ".".

* 3. new binding: new binding would be the "this" keyword being set as the "new" instance of the object that is being created from the constructor function. 

* 4. explicit binding: explicit binding is described as having "This" explicitly defined when the call or apply method is used. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function whatsMyName(name) {
    console.log(this);
    return name;
}
whatsMyName("Robert");

// Principle 2

// code example for Implicit Binding

const newObj = {
    greetMe: 'Hey there',
    sayHi: function(name) {
      console.log(`${this.greetMe} my name is ${name}`); // This keyword being set to newObj
      console.log(this);
    }
  };
  newObj.sayHi('Jimmy Neutron');

// Principle 3

// code example for New Binding

const scooter = function(maxSpeed, rider) {
    this.maxSpeed = maxSpeed;
    this.rider = rider;
    this.ride = function(speed, time) {
        console.log(speed * time)
    };
    this.writeRider = function() {
        console.log("This Rider is " + this.rider);
    };
}

let myScooter = new scooter(25, "Michael Jordan");
let myScooter2 = new scooter(40, "Steve Jobs");
let myScooter3 = new scooter(50, "Thomas Jefferson");

myScooter2.ride(23, 4);
myScooter3.writeRider();
// Principle 4

// code example for Explicit Binding

function Animal(options) {
    this.name = options.name;
  }
  
  // add 'grow' to Animal's prototype here
  
  Animal.prototype.grow = function() {
    console.log(`${this.name} grew larger!`)
  }
  function Cat(options) {
    Animal.call(this, options);
  }
  Cat.prototype = Object.create(Animal.prototype);
   const foofie = new Cat({
     name: 'foofie',
   });
  
   foofie.grow();
