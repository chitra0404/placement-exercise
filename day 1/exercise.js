//1.Explain the concept of prime numbers and write a function to check if a given number is prime.
function Prime(n) {
    let count = 0;
    if (n == 2) return true
    if (n % 2 == 0) return false;
    for (let fact = 3; fact * fact <= n; fact += 2) { 
        count++;
        if (n % fact == 0) {
            return [count, false]
        }
    }
    return [count, true]
}

console.log(Prime(11))


//2. Write a function to find the largest element in an array.

function largestnum(arr){

    let max=arr[0];//assigning the the index 0 to the max
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max)
        max=arr[i]
    }
    return max;
}
let num=[10,20,39,10,40]
console.log(largestnum(num));

//3. Write a function to find the second largest element in an array.
function SecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  // Example usage:
  const array = [5, 2, 10, 8, 3];
  const secondLargest = SecondLargest(array);
  console.log("Second largest element:", secondLargest);

  // 4.Write a function to find the nth Fibonacci number using iteration.

  function fibonacci(n) {
    let a = 0;
    let b = 1;
  
    if (n === 0) {
      return a;
    }
  
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
  
    return b;
  }
  
  console.log(fibonacci(8));


  //5. Write a function to calculate the factorial of a number using iteration.
  function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);
