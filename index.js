








// --------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!







// ---------- OVERVIEW AND INSTRUCTIONS ----------
// Algorithms
// This is the coding assigment for the sixth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - What is an algortihm?
//  - Properties of a good algorithm
//  - Ideas on how to solve a problem using an algorithm
//  - Practice a few algorithms in JavaScript

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// NOTE: These problems (aka algortihm questions) have not necessarily been covered in depth in the lessons so far, so please use your resources (mentors, classmates, etc) to help you. You can also use Google to help you.  

// FOR ADDITIONAL PRACTICE WE RECOMMEND THE FOLLOWING IN ADDITION TO THIS ASSIGNMENT:
// 1. Navigate to freecodecamp.org and create a free account
// 2. In the Menu, select Curriculum and select JavaScript Algorithms and Data Structures Certifications
// 3. Scroll down to the Basic Algorithms Scripting section
// 4. Work on the first 4 (four) problems.
//     a. Convert Celsius to Fahrenheit
//     b. Reverse a String
//     c. Factorialzie a Number
//     d. Find the Longest Word in a String

//---------- QUESTION 1 ----------
// Pairs Maker
// Write a function called pairsMaker(array) that takes in an array as an argument. The function should return a 2-Dimensional array (an array of arrays) where the subarrays represent unique pairs of elements from the input array.  The content of the array is limited to integers.  The contents of the input array do not need to be unique, but repeated elements do not create new unique pairs.  Order does matter for unique pairs (e.g. [1, 2] is not the same as [2, 1]). The result should include self pairs (e.g. [1, 1]).

// EXAMPLE CALL:  
//   let testArray = [1, 2, 3, 5];          
//   console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));

// EXAMPLE OUTPUT: 
//   Q1 pairsMaker: input: [1, 2, 3, 5], output: [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 1, 5 ],
//     [ 2, 1 ], [ 2, 2 ],
//     [ 2, 3 ], [ 2, 5 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ], [ 3, 5 ],
//     [ 5, 1 ], [ 5, 2 ],
//     [ 5, 3 ], [ 5, 5 ]
//   ]

// EXAMPLE CALL 2:  
//   testArray = [1, 2, 1, 1, 3, 5, 2];  // Note the 3 1's and 2, 2's)
//   console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));

// EXAMPLE OUTPUT 2: 
//   The output should be the same.
//   Q1 pairsMaker: input: [1,2,1,3,5], output: [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 1, 5 ],
//     [ 2, 1 ], [ 2, 2 ],
//     [ 2, 3 ], [ 2, 5 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ], [ 3, 5 ],
//     [ 5, 1 ], [ 5, 2 ],
//     [ 5, 3 ], [ 5, 5 ]
//   ]

// PUT YOUR CODE HERE
function pairsMaker(array){
  let result = [];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      result.push([array[i], array[j]]);
    }
  }
  return result;
}
let testArray = [1, 2, 3, 5];
console.log(`Q1 pairsMaker: input: [${testArray}], output:`, pairsMaker(testArray));

let testArray2 = [1, 2, 1, 1, 3, 5, 2];
console.log(`Q1 pairsMaker: input: [${testArray2}], output:`, pairsMaker(testArray2));



//---------- QUESTION 2 ----------
// Two Sum
// Write a function called twoSum(arr, target) that accepts an array and a // target number as arguments. The function should return a boolean indicating if any two numbers of the array add up to the target value. You can assume that input array contains only unique numbers.

// EXAMPLE CALL:  
//  let q2TestArray = [1, 2, 3, 4, 5];            
//  console.log (`Q2 twoSum: input: ([${q2TestArray}], 9), output:`, twoSum(q2TestArray, 9));

// EXAMPLE OUTPUT: 
//  Q2 twoSum: input: ([1,2,3,4,5], 9), output: true

// PUT YOUR CODE HERE
function twoSum(arr, target){
  let numSet = new Set();
  for (let num of arr){
    let complement = target - num;
    if (numSet.has(complement)){
      return true;
   }
    numSet.add(num);
  }
  return false;
}
let q2TestArray = [1, 2, 3, 4, 5];
console.log(`Q2 twoSum: input: ([${q2TestArray}], 9)), output` , twoSum(q2TestArray, 9))



//---------- QUESTION 3 ----------
// Pair Product
// Write a function called pairProduct(arr, product) that accepts an array of numbers and a product (the result when two numbers were multiplied together) as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.

// EXAMPLE CALL:  
//  let q3TestArray = [4, 6, 3, 4, 5];           
//  console.log (`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18));

// EXAMPLE OUTPUT: 
//  Q3 pairProduct: input: ([4,6,3,4,5], 18), output: true

// Write an additional test that results in a false return from pairProduct.

// PUT YOUR CODE HERE
function pairProduct(arr, product){
  let numSet = new Set();
  for (let num of arr) {
      if (num !== 0 && product % num === 0) {
        let complement = product / num;
        if (numSet.has(complement)) {
          return true;
        }
      }
      numSet.add(num);
    }

    return false;
  }

let q3TestArray = [4, 6, 3, 4, 5];
console.log(`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18))

let q3TestArray2 = [4, 6, 3, 4, 5];
console.log(`Q3 pairProduct: input: ([${q3TestArray2}], 12), output:`, pairProduct(q3TestArray2, 12))



//---------- QUESTION 4 ----------
// Strange Sums
// Write a function called strangeSums(arr) that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

// EXAMPLE CALL:  
//  let q4TestArray = [2, -3, 3, 4, -2]; 
//  console.log (`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray));

// EXAMPLE OUTPUT: 
//  Q4: input: [2,-3,3,4,-2], output: 2

// PUT YOUR CODE HERE
function strangeSums(arr) {
  let count = 0;
  let visitedPairs = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        let pair = [arr[i], arr[j]].sort().toString();
        if (!visitedPairs.has(pair)) {
          visitedPairs.add(pair);
          count++;
        }
      }
    }
  }

  return count;
}
let q4TestArray = [2, -3, 3, 4, -2];
console.log(`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray))

