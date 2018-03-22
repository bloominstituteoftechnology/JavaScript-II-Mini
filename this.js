// * The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. This can be considered as a function that points to a window
function whatsUp(name){
    console.log('Yo'+ name);
    consloe.log(this);
}
whatsUp('Niloc')

// * 2 This is also used for caling objects
let whatsUp ={
    greeting: 'Yo',
    say: function(name){
        console.log(this.greeting +name);
        console.log(this);
    }
}
whatsUps.say('Niloc');

// * 3. When using constructors, this refers to the specific instance of the object that is created then returned by the 
//constructor function
  function whatsUp(name){
      this.greeting ='Yo';
      this.name = name;
      this.say =function() {
          console.log(this)
      }
  };
var greetNiloc = new whatsUp('Niloc')
var greetColin = new whatsUp('Colin');

greetNiloc.whatsUp();
greetColin.whatsUp();
// * 4.Whenever JavaScripts call or apply method is used, this is explicitly defined.
greetColin.sayGoodbye.call(greetColin);
greetNiloc.sayGoodbye.call(greetNiloc);


