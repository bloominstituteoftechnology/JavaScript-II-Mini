// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }

// write a recursive - function called countToTen that mimics the while loop above.

// code here
let countToTen = (num) => {
  if (num === 11) return; //base case;
  console.log(num)
  countToTen(num + 1);
}
// countToTen(2);

// when you code is ready, un-comment the next line and run the file
 console.log(countToTen(1));
/* ================ Next Problem ================= */

// Problem 2:
//
// const factorial = n => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };
//
// console.log(factorial(5));

// write the above function in a recursive way.
// if number is less than 0, it should be not used
// if number is 0, return 1
// factorializing is multiplying all the numbers before it except zero
// example 4! = 4 * 3 * 2 * 1 = 24
// example 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// therefore, it should the number should be multiplied by all the numbers before it
// then return the result

let recursiveFactorial = (num) =>
if (num = < 0)
  return "undef";
  else if (num === 0) {
    return 1;
  }
  else {
    return (num * recursiveFactorial(num - 1));
  }
// when your code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());
