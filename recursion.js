// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
let countToTen = function(num) {
  if (num > 10) return num; // base
  console.log('recursive', num);
  countToTen(++num); // in this case, return isn't necessary.
};
// when you code is ready, un-comment the next line and run the file
countToTen(1);
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// write the above function in a recursive way.
const recursiveFactorial = (n) => {
  let result = 1;
  if (n === 1 || n === 0) return n;
  result *= n * recursiveFactorial(n - 1);
  return result;
};

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));