/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this is not assigned to any object, it represents itself wihch is the object in the window ( the window binding).

* 2. implicit binding : if there is an object and there is a method iside that object, if we  need to use a key or property 
of that object INSIDE that function, we need to append "this." to that key, to let the function undestand the source
of that key. this always refers to the father object


* 3. explicit binding : there is 3 methods we could use : .call  .apply  .bind   if we have a function has the this.
 conected to a key inside it, and we have another object has the same key and we want this. inside the function to 
 refer to that object, WE HAVE TO BIND THE FUNCTION AND THE OBJECT USING .call method. so we could use 
 functionName.call(objectName in this case this inside the function will refer to the object.
>>>>>> let say we have an arry of values and we need to pass them to the binded function, we need the pass them as 
parameters to that function, AND we need to mention them with this indexs inside the .call method along with the object
name >>>> functionName.call(objectName, arr[0],arr[i])...we state every arr index  as needed . if the list of the indexs 
is log we could use the spread syntax of the arry (..arr)
.apply does the same thing as .call and we could use just the  arr name instead of the spread syntax.
.bind does the same thing as .call but the only differnce is we need to assign the binded function/object/arr to a new 
function and we have to invoke the new function to let .bind works ..... newFunction = functionName.bind(objectName),..arr);
newFunction();


* 4. The last type of this. key word is if we have an object that we need to use as a model to create copies of it 
we nedd to use assign this. keyword to every single key or property inside that object. Then we transfer that object 
to a function formate and we start the name of that new function ( constructor) with UpperCase letter to be unique
this. keyword in any copy refer not to the original constructor but to the copy that was created in by using the term "new"
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
console.log(this.hilal)

// Principle 2

// code example for Implicit Binding

settara = {
    bill: 'cocco',
    hill: 'soso',
    heyyy: function () {
        'hello' + this.bill;
    }
}


// Principle 3

// code example for New Binding
settara = {
    bill: 'cocco',
    hill: 'soso',
}
hey = function () {
    'hello' + this.bill;
}
hey.call(settara);


//  -----------------------

settara = {
    bill: 'cocco',
    hill: 'soso',
}
hey = function (arr1, arr2) {
    arr1 + 'and ' + arr2 + 'says hello ' + this.bill;
}
arr = ['foo', 'boo', 'doo']


hey.call(settara, arr[0], arr[1]);

hey.call(settara, ...arr);

// ----------------------------------
settara = {
    bill: 'cocco',
    hill: 'soso',
}
hey = function (arr1, arr2) {
    arr1 + ' and ' + arr2 + ' says hello ' + this.bill;
}
arr = ['foo', 'boo', 'doo']


hey.apply(settara, arr);
// -------------------------------------
settara = {
    bill: 'cocco',
    hill: 'soso',
}
hey = function (arr1, arr2) {
    arr1 + 'and ' + arr2 + ' says hello ' + this.bill;
}
arr = ['foo', 'boo', 'doo']


newFunction = hey.bind(settara, ...arr);
newFunction();


// Principle 4

// code example for Explicit Binding
Settara = function () {
    this.bill = 'cocco';
    this.hill = 'soso';
    this.hey = function () {
        'hello' + this.bill;
    }
}
hilal = new Settara('didi', 'fifi');
