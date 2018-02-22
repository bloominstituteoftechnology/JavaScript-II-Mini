// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:
let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  ++n;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
const countToTen = (n) => {
  if (n <= 10) {
    console.log(n);
    countToTen(++n);
  }
}; 
countToTen(1);

// when you code is ready, un-comment the next line and run the file
// console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++)
  {
    console.log(i);
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
const recursiveFactorial = n => {
  if( n <= 1){
    return 1;
  } else{
    return n * recursiveFactorial(--n); // make sure that you insert in --n because n-- is the n before decrement
  }
}

console.log(recursiveFactorial(5));
