/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window/Global binding- this points to the whole window scale.
* 2.Implicit Binding- this points to a specific object.
* 3.New Binding- this points to an obect and creates a new object in a function.
* 4.Explicit Binding- when .call or .apply are used 
*
* write out a code example of each explanation above
*/

//console.log('hello world!');

// Principle 1

// code example for Window Binding

/*function newName (){
    console.log(this);
    return name;
}

newName('Hello');*/


// Principle 2

// code example for Implicit Binding
/*const balls = {
    type: "soccer",
    shape: "round",
    size: "5",
    attribute: function() {
    console.log(this.shape);
    }
}

balls.attribute();*/

// Principle 3

// code example for New Binding
let Teams = function(color, name, type) {
   this.name = color;
   this.colors = name;
   this.points = type;
 }

const clubA = new Team('America', 'Yellow', '99');

console.log(team);

// Principle 4

// code example for Explicit Binding
/*let favorites = {
    sport: soccer,
    food: pizza,
    color: black,
}

const foodFav = function () {
    console.log('My favorite food is ' + this.food);
}

foodFav.call(favorites);*/
