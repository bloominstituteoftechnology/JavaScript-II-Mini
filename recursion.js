// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here

const countToTen = (n) => {
  console.log('While Loop', n);
  while (n < 10) {
    return countToTen(n + 1);
  }
}
// when you code is ready, un-comment the next line and run the file
 console.log(countToTen(1));
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => { // function named 1
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// write the above function in a recursive way.

const recursiveFactorial = (n) => { // function called recursiveFactorial
  if (n === 0 || n === 1) { // base case of if n is either 0 or 1, the factorial of both is 1. 
    return 1; //  return 1 for either case. 
  } else { 
    return n * recursiveFactorial(n - 1) //return n x the function called with n -1. n = 4,  4 * (4 - 1) = 12. 
  }
}

// when your code is ready, un-comment the next line and run the file
 console.log(recursiveFactorial(4));
