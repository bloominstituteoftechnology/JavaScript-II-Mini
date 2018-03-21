// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
let n = 1;
const countToTen = () => {
  if (n > 10) return 1;
  console.log(n);
  n++;
  countToTen();
}

console.log(countToTen());

// when you code is ready, un-comment the next line and run the file
// console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:

const recursiveFactorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
};

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial());
