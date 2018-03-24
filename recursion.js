// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

/*let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}*/

// write a recursive - function called countToTen that mimics the while loop above.

// code here
const countToTen = () => {
  n = 0;
  const loop = () => {
    if (n > 10) return;
    console.log("While Loop", n);
    return loop(++n);
  }
  return loop();
}


// when you code is ready, un-comment the next line and run the file
//countToTen();
/* ================ Next Problem ================= */

// Problem 2:
const factorial = n => {
  let result = 1;
  let i = 2;
  const loop = () => {
    if (i > n) return result;
    result *= i;
    return loop(++i);
  }
  return loop(n);
};
factorial(5);

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());
