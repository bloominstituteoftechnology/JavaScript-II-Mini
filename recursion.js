// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
const countToTen = (n)
if (n > 10)
returnconsole.log(n)
return countToTen(++n){
  
  }
}

// when you code is ready, un-comment the next line and run the file
// console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:
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


// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());



