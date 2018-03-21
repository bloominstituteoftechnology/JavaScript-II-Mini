// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
let m = 1;
let countToTen = function(m) {
  if (m === 10) return console.log('While Loop II', m);
  console.log('While Loop II', m);
  m++;
  return countToTen(m);
}

// when you code is ready, un-comment the next line and run the file
console.log(countToTen(m));
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // 1 * 2, 2 * 3, 6 * 4, 24 * 5
  }
  return result;
};

console.log(factorial(5));

// write the above function in a recursive way.
let fresult = 1;
let recursiveFactorial = (k) => {
  if (k === 1) return console.log(fresult);
  fresult *= k;
  // console.log("K is: " + k + "fresult: " +fresult);
  k--;
  recursiveFactorial(k);

}
// factorialT(5);



// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));
