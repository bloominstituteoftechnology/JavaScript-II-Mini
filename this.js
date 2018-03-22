/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window it's self is one big object so if nothing is to the left of this it calls the window object
* 2. implicit binding is the most common of all the  principles and it allows you to call an object by name
* 3. the new binding sets the function to a new variablew
* 4.  Explicit binding
*
* write out a code example of each explanation above
*/

console.log('hello world!');


// Principle 1

// code example for Window Binding
this.obj;
// Principle 2

// code example for Implicit Binding
let card ={
    name: 'The Lich King',
    rarity: "legendary",
    sayNameAndRarity: function(){
        console.log(`${this.name} is a, ${this.rarity} card.`)
    }
}
card.sayNameAndRarity()

// Principle 3
function cardValues(rarity, attack, defense){
    this.rarity = rarity;
    this.attack = attack;
    this.defense = defense;

}
let card = new cardValues(`Y'shaarj`, 4, 12)
// code example for New Binding

// Principle 4
 function amazing(){
    return console.log(`${this.name} is card is amazing~~!`)
 }

 amazing.call(cardValues)
// code example for Explicit Binding
