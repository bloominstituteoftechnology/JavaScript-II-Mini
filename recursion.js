// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here

let num = 1;
function countToTen() {
  if(num > 10) {
    return
  }
  console.log('Recursive loop', num);
  return countToTen(num++);
}

// when you code is ready, un-comment the next line and run the file
countToTen();
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

function recursiveFactorial(n) {
  let i = 2;
  function recursionFunction(n) {
    i++;
    if (i > n) {
      return n;
    }
    return (n * recursionFunction(n-1));
  }
  return recursionFunction(n);
}

// when your code is ready, un-comment the next line and run the file
 console.log(recursiveFactorial(5));
