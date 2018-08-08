// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }

// write a recursive - function called countToTen that mimics the while loop above.

// code here
const countToTen = n => {
  if (n < 0 || n > 10 || n === undefined) return console.log(n); //base case
  console.log ('Counting down ', n);
  return countToTen(++n);  //call the function
}

// when you code is ready, un-comment the next line and run the file
// console.log(countToTen(3));
/* ================ Next Problem ================= */

// Problem 2:

// const factorial = n => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };
// console.log(factorial(5));

const recursiveFactorial = f => {
  x = f;
  if (f <= 1) return console.log(x);
  x += f * (f -1);
  return recursiveFactorial(--f);
};

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(7));
