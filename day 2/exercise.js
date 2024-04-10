//1.Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.
// Fibonacci series is a series that generates subsequent series of numbers by the addition of the two previous numbers.
// The first two terms of the Fibonacci series are zero and one, respectively. 
// And the next terms are the addition of the two previous terms.
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
  
  console.log(fibonacci(3));

  //2.Write a function that takes a number as input and returns the factorial of that number.
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

  //3.Write a function that checks if a given string is a palindrome.

  function checkPalindrome(string) {

    let l = string.length;

    // loop running through half of the string
    for (let i = 0; i < l / 2; i++) {

        // checking the index in the first half with the index in the second half
        if (string[i] !== string[l - 1 - i]) {
            return "It is not a palindrome";
        }
    }
    return "It is a palindrome";
}

const word = "wow";

console.log(checkPalindrome(word));

//4.Write a function that finds the maximum and minimum elements in an array.

function findMinAndMax(arr) {
    if (arr.length == 0) {
        return "Empty array"
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return {
        min, max
    }
}

const arr = [10,20,6,80];
console.log(findMinAndMax(arr));

//5.Explain the concept of anagram and write a function to check if two strings are anagrams of each other.
//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// For example, “act” and “cat” are anagrams of each other.
 // An anagram does not have to have the same meaning as the original word or phrase.

 function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const Str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const Str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
if (Str1.length !== Str2.length) {
      return false;
    }
   const char1 = {};
    const char2 = {};
  for (let char of Str1) {
      char1[char] = (char1[char] || 0) + 1;
    }
  for (let char of Str2) {
      char2[char] = (char2[char] || 0) + 1;
    }
for (let char in char1) {
      if (char1[char] !== char2[char]) {
        return false;
      }
    }
 return true;
  }
  console.log(isAnagram('act', 'cat'));