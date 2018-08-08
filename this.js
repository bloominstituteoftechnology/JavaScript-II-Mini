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
1. Implicit Binding. When you call a function within an object (called a method), the method's this 
statement uses properties attached to the object. In the following, hello is the object and myFunc() 
is a method. Example: hello.myFunc() .

2. Explicit Binding. Is when you want to pass data that's not attched to an object or function to
do a task on that object or function. If the object or function is not connected to some variable 
that has data that you want to use on the object or function, you use EXPLICIT BINDING. Such as 
.call(), .apply() , or .bind(). In the following hello is a function and arVar is a variable passed
to the hello function. Example: hello.call(argVar) .

3. New Binding. It's used to create a new object from an object constructor, ES5 and ES6 constructor 
function (class in ES6) look different, but the syntax to create new object is the same. When you create 
a new object with the "New" keyword (let objname = New ClassConstruct(prop1, prop2, prop3, etc.), the 
object's constructors this.prop are bound to the new object created. So, the .this references the new object. 
 Example: let newvar = New Hello("prop1","prop2", "etc of new object") .


4. Window Binding. When you don't have data for a task, such as a function doing a task with data, and the function didn't receive the 
data by other methods (Implicit binding, Explicit binding, or New binding), than the function will look for
data in the container, or window. The following doesn't have anything specfic to console.log, and it will
log the windows's (or container's) this references. Example: console.log(this) 


// Principle 1

// code example for Window Binding
console.log(this) 

// Principle 2

// code example for Implicit Binding
hello.myFunc()

// Principle 3

// code example for New Binding
let newvar = New Hello("prop1","prop2", "etc of new object")

// Principle 4

// code example for Explicit Binding

hello.call(argVar)