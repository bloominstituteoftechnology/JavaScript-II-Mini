// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:
// hi

let x = 1;
while (x <= 10) {
  console.log('While Loop', x);
  x++;
}

// write a recursive - function called countToTen that mimics the while loop above.
let n = 1;
const countToTen = () => {
  if (n === 10) return console.log('While Loop', n);
  console.log('While Loop', n);
  n++;
  return countToTen();
};
// when you code is ready, un-comment the next line and run the file
console.log(countToTen(10));
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};


const recursiveFactorial = (f) => {
if (f <= 1) return 1;
return f * recursiveFactorial(f - 1);
};


console.log(factorial(5));

// write the above Function a recursive way.

// when you code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));
