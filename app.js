// String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  let spl = str.split("").reverse().join("");
  return console.log(spl);
}
reverseString("table");


//Count Characters: Create a function that counts the number of characters in a string.
function countString(str){

  let lengthOfString = str.split("").length
  return console.log(lengthOfString);
}

countString("table")




// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// let word = "jesutoni"
//     let cap = word.charAt(0).toUpperCase() + word.slice(1)
//     console.log(cap);


  function capilalizeFirstLetterOfEachWordInASentence(sentence){
      return console.log
      (sentence.split(" ").map(function(word){
         return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" "))
  };
  capilalizeFirstLetterOfEachWordInASentence("we figured it out")


  // Array Functions:
  // Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
 

  function findMax(arr) {
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return console.log(max); 
  }
  
  function findMin(arr) {
      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
              min = arr[i];
          }
      }
 
      return console.log(min);  
  }
  
  
  // Sum of Array: Create a function that calculates the sum of all elements in an array.

  function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}


// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
          result.push(arr[i]);
      }
  }
  return result;
}



// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
if (n === 0 || n === 1) {
  return 1;
} else {
  return n * factorial(n - 1);
}
}

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(number) {
  // Prime numbers are positive integers greater than 1
  if (number <= 1) return false;

  // Check for divisibility by 2 and 3 as a basic optimization
  if (number % 2 === 0 || number % 3 === 0) return number === 2 || number === 3;

  // Loop through potential divisors up to the square root of the number
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  // If no divisors found, the number is prime
  return true;
}


const num = 4;
const isPrimeResult = isPrime(num);

console.log(num,isPrimeResult ? "is a prime number" : "is not a prime number");



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci(n) {
  // Base cases:
  if (n <= 1) {
    return n;
  }

  // Recursive case: nth term is the sum of (n-1)th and (n-2)th terms
  return fibonacci(n - 1) + fibonacci(n - 2);
}


const numTerms = 10;
const fibonacciSequence = [];

for (let i = 0; i < numTerms; i++) {
  fibonacciSequence.push(fibonacci(i));
}

console.log(fibonacciSequence);