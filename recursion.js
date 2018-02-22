// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.
// JEREMY
// Lizz
// code here
const countToTen = num => {
  if (num > 10) return;
  console.log(num);
  countToTen(++num);
};

// when you code is ready, un-comment the next line and run the file
console.log(countToTen(1));
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
const recursiveFactorial = n => { 
  // let i = 2;
  // if (n === 0) return 1;
  // return n * recursiveFactorial(n-1);

  let i = 2;
  let results = 1;
  if (i === n) return results;
  results *= i; // i * results = new results
  return n * recursiveFactorial(i++);

  // return n * recursiveFactorial(n-1);
  // let i = 2;
  // let result = 1;
  // if (n === 0) return n;
  // result *= i;
  // recursiveFactorial(++n);

//   let result = 1; 
//   let i = 2;
//   if ( i <= n); {
//     result *= i;
//   console.log(i);
//   recursiveFactorial(i++);
//   }
};
// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));
