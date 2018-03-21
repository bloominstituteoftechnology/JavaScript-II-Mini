// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

const countToTen = n => {
	let n = 1;
	if (n > 10) {
	  return;
	}
	console.log(n);
	return countToTen(++n);
};
countToTen(1);
/*******************************/
let n = 1;
const countToTen = () => {
	if (n > 9) {
	  return 10;
	}
	console.log(n);
	return countToTen(n++);
};
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

console.log(factorial(5));

// write the above function in a recursive way.

const factorial = n => {
  //base case
  if (n === 0) {
    return 1;
  }
  //return function 
  return n * factorial(n - 1);
};

console.log(factorial(5));