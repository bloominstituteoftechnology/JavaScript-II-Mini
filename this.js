* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding-information from whatever console you are using
* 2. Implicit Binding-the object before dot, thats the this(what its referring to)
* 3. New Biding-function that creates an object then returns it
* 4. Explicit Binding-overide what objects get set to with .call and .apply
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function winBind(name) {
  return name;
}
winBit('Kelly')

// Principle 2

// code example for Implicit Binding
const myTown = {
  weather: 'rain',
  mood: 'relaxed'
  myAtmosphere: function(weather) {
    console.log(this.mood)
  }
}
myTown.myAtmosphere();

// Principle 3

// code example for New Binding
const myTown = {
  weather: 'rain',
  mood: 'relaxed'
  myAtmosphere: function(weather) {
    console.log(this.mood + this.weather)
    console.log(this);
  };
}
const newWeather = new myTown('sunny');

newWeather.mood();



// Principle 4

// code example for Explicit Binding
const myTown = {
  weather: 'rain',
  mood: 'relaxed'
  myAtmosphere: function(weather) {
    console.log(this.mood + this.weather)
    console.log(this);
  };
}
const newWeather = new myTown('sunny');
const newMood = new myTown('exhausted');

newWeather.myAtmosphere.call();
newMood.myAtmosphere.apply();
