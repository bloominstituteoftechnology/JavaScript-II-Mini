/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - occurs in browser when not using other bindings, default binding, global
* 2. Implicit - whatever is to the left of the dot is the target
* 3. New Binding - a constructor function that returns an object
* 4. Explicit Binding - when you explicitly pass a this through call(), apply() or bind()
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

function coding(language) {
  console.log(this.code);
  return language;
}
window.code = "javascript";

// Principle 2

// code example for Implicit Binding

const myDay = {
  listen: "Sufjan Stevens",
  code: "JavaScript",
  dinner: "meatloaf",
  cook: function () {
    console.log(this.dinner);
  }
};
myDay.cook();

// Principle 3

// code example for New Binding

function veganSandwiches(name, mainIngredient, secondaryIngredient) {
  this.name = name;
  this.mainIngredient = mainIngredient;
  this.secondaryIngredient = secondaryIngredient;
}

var sandwich1 = new veganSandwiches("Refried Bean Wrap", "Refried Beans", "Avocado")

// Principle 4

// code example for Explicit Binding

function eating() {
  return console.log(this.name + " is a functon, not a recipe!");
}

eating.call(veganSandwiches);
