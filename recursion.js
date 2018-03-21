// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1
while (n <= 10) {
  console.log('While Loop', n)
  n++
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
n = 1
const countToTen = () => {
  if (n >= 10) return n
  console.log(n++)
  return countToTen()
}
// when you code is ready, un-comment the next line and run the file
console.log(countToTen())
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

// write the above function in a recursive way.
const recursiveFactorial = n => (n < 1 ? 1 : n * recursiveFactorial(n - 1))

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(3))
