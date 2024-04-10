//1. Write a recursive function to calculate the nth Fibonacci number.

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(2));



// Write a recursive function to calculate the factorial of a number.


function factorial(num) {
    if (num < 2) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(5)); 

//3. Write a recursive function to find the sum of digits of a number.

const findSum = (num) => {
    if(num < 10){
       return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log(findSum(2568));

 // Write a recursive function to reverse a string.

 function reverseString(str, n){
  
    if(n == 0){
       return '';
    }
    return str[n-1] + reverseString(str, --n);
  }console.log(reverseString('prashant', 8));

  //5. Write a recursive function to calculate the power of a number.

  function power(base, exponent) {
    if (exponent === 0) {
      return 1; // Base case
    } else {
      return base * power(base, exponent - 1); // Recursive case
    }
  }
  console.log(power(2, 3));