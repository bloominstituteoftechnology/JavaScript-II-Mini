# JavaScript II Mini
## Topics we will cover
* Recursion
* the `this` keyword
* constructor functions
* classes
### Instructions
* This repository is provided as more of a follow along structure. 

* In class we will be going over the principles listed above and you will be expected to follow along when the instructor asks you to do so.

### Recursion
#### What it is
* recursion is another way to represent a looping program. 
* Simliar to a `for loop` or a `while loop` a recursive function will loop until you tell it to stop. 
* when solving complex algorithms recursion comes in handy. It is not that great for smaller, less complex algorithms.
 * For every recursive function, you'll need to establish what is called a `base case`. A `base case` is a condition that when triggered, will discontinue the call to your function.

### The `this` keyword
* Because JavaScript is both an Object Oriented and Functional Programming language, it has some very interesting concepts built into it.
* The 'this' keyword is one of those querky concepts that tend to trip up a lot of people coming into JavaScript.
* You can think of this, as a Pointer to an object. For example, you can use the this keyword to reference an object without having to refer to that object's name.
* **example**
```
  const myObj = { 
    name: 'Freddy' 
    greet: function() {
      console.log(`hello my name is ${this.name}`);
    }
  };
  myObj.greet();
```
* In the above example the "this" keyword becomes active when a person's name is called. 
* Tyler McGinnis' four rules to the 'this' keyword. [found here](https://www.youtube.com/watch?v=zE9iro4r918)
  1. Window Binding
  2. Implicit Binding
  3. New Binding
  4. Explicit Binding
