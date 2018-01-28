/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is window or console binding. It is used in global scope and 
     "this" can reference the window or console object.

* 2. The second principle is implicit binding. "This" references the object before the
     dot in method calls that include it.

* 3. The third principle is new binding. "This" references an object being created when making
     a new object from a constructor function.

* 4. The fourth principle is explicit binding. "This" is explicitly defined when using call(), 
     apply() or bind().
*
* write out a code example of each explanation above
*/

 // Principle 1
// code example for Window Binding

function windowThis() {
	console.log(this);
}
 //windowThis();  // This will return the window object which is very long

 // Principle 2
// code example for Implicit Binding
	
   const myObject = {
   hello: 'hello world!',
	 implicitThis: function() {
		 console.log(this);
	}
};
   myObject.implicitThis(); 

 // Principle 3
// code example for New Binding

	 class Cat {
		 constructor(name) {
		 this.name = name;	 
     this.speak = 'meow';    
   }
   newThis() {
		 console.log(this);
	}
}
   const captainHook = new Cat('Captain Hook');
	 captainHook.newThis();

 // Principle 4 
// code example for Explicit Binding
   
	 const welcome = {
     greeting: 'hello',
	};					
							
	const explicitThis = function(recipient) {
		console.log(`${this.greeting} ${recipient}!`); 
	};
  
  explicitThis.call(welcome, 'world');
	explicitThis.apply(welcome, ['world']);
	const explicitThisHello = explicitThis.bind(welcome);
	explicitThisHello('world');

