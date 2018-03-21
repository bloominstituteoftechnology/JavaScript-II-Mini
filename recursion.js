// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
function countToTen(n) {
  if (n > 10) return n;
  console.log(n);
  countToTen(++n);
}

// when you code is ready, un-comment the next line and run the file
// console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:



// console.log(factorial(5));

// write the above function in a recursive way.

const recursiveFactorial = (n) => {
  let result = 1;
  if (n === 1 || n === 0) return n;
  result *= n * recursiveFactorial(n - 1); // 5 * 4 * 3 * 2
  return result;
};


// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(10));
