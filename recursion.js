// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.
// when you code is ready, un-comment the next line and run the file


function countToTen(count) {
  if (count > 10) return;
  console.log(count);
  return countToTen(++count);
};
countToTen(1);

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

// when your code is ready, un-comment the next line and run the file

function recursiveFactorial(n) {
  let result = 1;
  let counter = 2;
    function loop() {
     if (counter > n) return result;
        result *= counter;
        return loop(counter++);
    }
    return loop();
}

console.log(recursiveFactorial(5));