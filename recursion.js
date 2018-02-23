// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }

const countToTen = (num = 1) => {
  console.log(num);
  if (num === 10) {
    return "";
  } else {
    return countToTen(num + 1);
  }
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here

// when you code is ready, un-comment the next line and run the file
console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};


const recursiveFactorial = (n, result = 1, i = 2) => {
  if (i <= n) {
    return '';
  } else {
    result *= i;
    return recursiveFactorial(n + 1, result, i);
  }
}

console.log(factorial(5));

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());
