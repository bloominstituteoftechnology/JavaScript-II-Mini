// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:
//Note for initial PR

// let n = 1;
// while (n <= 10) {
//  console.log('While Loop', n);
//  n++;
//}
const countToTen = num => {
  if (num > 10) return; 
  console.log(num); 
  return countToTen(++num); 
};
let num = 1; 

// write a recursive - function called countToTen that mimics the while loop above.

// code here

// when you code is ready, un-comment the next line and run the file
console.log(countToTen(num));
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  if (n === 0) return 0;
  if (n === 1) return 1; 
  else {return n * factorial(n - 1)};  
};

 // let result = 1;
 // for (let i = 2; i <= n; i++) {
 //   result *= i;
 // }
 // return result;
//};

console.log(factorial(5));

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());
