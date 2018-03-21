/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding binds to the object of the window itself that you are inside of running the code.
* 2. implicet binding is binding to the object that is actually using the this. keyword
* 3. new binding is binding the this. property to the new object being created from the prototype object class or as i call it the object base class. 
* 4. Explicit binding is binding from outside the object in question using a function or something else to connect to the object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 this.car = 'convertable'; // binds this to the window itself so the windows.car = 'convertible'


// Principle 2

// code example for Implicit Binding
// create your object. 
const car = {
    //key: value,
    color: 'red',
    type: 'convertible',
    speed: 0,
};

// use a function to connect to the object and allow your this to be use with the object in question. 
 car.carsSpeed = (speed) => {
  return this.speed = 90;
}
console.log(car.carsSpeed());

// Principle 3

// code example for New Binding
let carss = function(color, type, speed) {
    //key: value,
    this.color = color;
    this.type = type;
    this.speed = speed;
};

 let corvette = new carss('blue', 'sedan', 1000);

console.log(corvette);

// Principle 4

// code example for Explicit Binding

// use .call .bind .apply
// function.bind(thisArg[,arg1[,arg2[,argN]]]


// create your object. 
const carsss = {
    //key: value,
    color: 'red',
    type: 'convertible',
    speed: 0,

    getSpeed: function() {
        return this.speed;
      }
};

// use a function to connect to the object and allow your this to be use with the object in question. 
const newcars = carsss.getSpeed;

const newCar = newcars.bind(carsss);
console.log(newCar());
