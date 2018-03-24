/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. an implicit binding refrences the parent object containing the this keyword
* 2. an explicit binding refrences an object outside of its scope using, .call, .bind, or .apply
* 3. when creating a new object with the new keyword the this keyword will then refrence the newly created variable object
* 4. when calling this in a function that is not in the scope of an object then the this keyword will default to the window object
*
* write out a code example of each explanation above
*
*/

// Principle 1

// code example for Window Binding
this.alert("hello world");

// Principle 2

// code example for Implicit Binding
const myObj = {
  sentence: "hello world",
  say: () => {
    return this.sentence;
  }
}
myObj.say();
// Principle 3

// code example for New Binding
myFunc = (name, age) => {
      this.name,
      this.age
    }
    const myNewObj = new myFunc('Eric', 24); // its like taking the original object as a blueprint and your new object is the "constructed" version of your blueprint
// Principle 4

// code example for Explicit Binding
myFunc = () => {
  return "your sentence here: " + this.sentence;
}
myObj = {
  sentence:"hello world!"
}
myFunc.call(myObj)
