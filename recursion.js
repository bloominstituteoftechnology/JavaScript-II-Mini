// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }

// write a recursive - function called countToTen that mimics the while loop above.

// code here
const countToTen = n => {
	if (n > 10) return;
	console.log(n)
	return countToTen(n++);
}

// countToTen(0);


// when you code is ready, un-comment the next line and run the file
console.log(countToTen(0));
/* ================ Next Problem ================= */

// Problem 2:

// const factorial = n => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(5));

// write the above function in a recursive way.
const recursiveFactorial = x => {
	if (x === 0) {
	return 1;
	}
	return x * recursiveFactorial(x-1);

}


// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));
