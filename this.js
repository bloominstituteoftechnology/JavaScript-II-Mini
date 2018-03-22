/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
 window._ = {};

// Principle 2

// code example for Implicit Binding
function foo() {
      console.log( this.a );
    }
    
    var obj2 = {
      a: 42,
      foo: foo
    };
    
    var obj1 = {
      a: 2,
      obj2: obj2
    };
    +
    +obj1.obj2.foo();
          

// Principle 3

// code example for New Binding
 function foo(a) {
       this.a = a;
     }
    
     var bar = new foo( 2 );
     console.log( bar.a );

// Principle 4

// code example for Explicit Binding
 function foo(something) {
       console.log( this.a, something );
       return this.a + something;
     }
    
     // simple `bind` helper
     function bind(fn, obj) {
       return function() {
         return fn.apply( obj, arguments );
       };
     }
    
     var obj = {
       a: 2
     };
    
     var bar = bind( foo, obj );
    
     var b = bar( 3 );
     console.log( b );
