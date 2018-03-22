/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding:
        Is when the "this" references the call left of the dot notation.
* 2. Explicit Binding:
        Is using call/apply/bind to reference an argument that is outside of the function. Call passes the elements one by one, apply passes the elements as an array and bind passes the elements as a new function.
* 3. New Binding:
        Is when applying the "this" keyword into a constructor by using the "new" keyword.
* 4. Window Binding:
        When there is no reference to the "this" keyword, it will use its current window object as a reference by default, returning "undefined".
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
const cat = function() {
    console.log(this.purr)
}
cat();

// Principle 2

// code example for Implicit Binding
const dog = {
        name: "Doggo",
        type: "Shiba Inu",
        whatType: function () {
                console.log(this.type);
        }
};
dog.whatType();

// Principle 3

// code example for New Binding
const Pet = function (name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
}

const cate = new Pet("Cate", "cat", "1 year");

console.log(cate);


// Principle 4

// code example for Explicit Binding
const whatAge = function () {
        console.log("Doggo is " + this.age + " old" );
}

const doggo = {
        age: "1 year",
        type: "Shiba Inu",
}

whatAge.call(doggo);