/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the value of “this” will be the window/console Object;
* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot becomes 'this.
* 3. New Binding: When constructor function is used, object is created and returned by the constructor function.
* 4. Explicit binding: Whenever JavaScript’s call, apply or bind method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1 ==========
// code example for Window Binding
// function callWindow () {
//     console.log(this);
// }
// callWindow();

// Principle 2 ==========
// code example for Implicit Binding
// const computer = {
//     gpu: 1,
//     cpu: 2,
//     motherboard: 1,
//     cpuNumber: function () {
//         console.log(this.cpu);
//     }
// }
// computer.cpuNumber();

// Principle 3 ===========
// code example for New Binding

// let Computer = function(gpu, cpu, motherboard) {
//     this.gpu = gpu;
//     this.cpu = cpu;
//     this.motherboard = motherboard;
// }

// let mike = new Computer('nvidia', 'i7', 'msi')
// let tom = new Computer('radeon', 'ryzen', 'gigabyte')

// console.log(mike.gpu && mike.cpu);
// console.log(tom);

// Principle 4 ===============
// code example for Explicit Binding

let myComputer = {
    gpu: 'nvidia',
    cpu: 'intel',
    motherboard: 'asus'
}

let saySpec = function() {
    console.log('My computer has: ' + this.gpu + ' and ' + this.cpu + ' and ' + this.motherboard)
}

saySpec.call(myComputer);