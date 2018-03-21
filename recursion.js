// to test these problems you can run 'node recursion.js' in your terminal
console.log('================ Problem 1 Example Below: =================');
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.
console.log('================ Problem 1 Output Below: =================');
// code here
const countToTen = (counter) => {
  if (counter > 10) return;
  if (counter === undefined) counter = 1;
  console.log('While Loop ' + counter);
  return countToTen(++counter);
}

// when you code is ready, un-comment the next line and run the file
console.log(countToTen());


/* ================ Next Problem ================= */

console.log('================ Problem 2 Example Below: =================');
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
console.log('================ Problem 2 Output Below: =================');
// code here
const recursiveFactorial = (x, acum = 1) => x ? recursiveFactorial(x - 1, x * acum) : acum;

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5)); // Also works with no args ;-)
