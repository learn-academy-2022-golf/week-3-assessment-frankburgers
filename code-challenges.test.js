// ASSESSMENT 3: Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

/*
  Errors:

  SyntaxError: /code-challenges.test.js: Unexpected token, expected ","

  Test suite failed to run
  ENOENT: no such file or directory, open 'node:test'
  had to comment out const { it } = require("node:test") on line 4
*/

describe ("fibonacciSequence", () => {
  it("takes in a number (greater than 2), and returns an array that length containing the numbers of the Fibonacci sequence.", () => {

     const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibOutput1 = [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    const fibOutput2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(fibonacciSequence(fibLength1)).toEqual(fibOutput1)
    expect(fibonacciSequence(fibLength2)).toEqual(fibOutput2)
  })
})

// fibonacciSequence
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.
// Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

const fibonacciSequence = (num1) => {

  const arrayFib = [1,1]
  // This was hard
  for ( let i = 1 ; i < num1-1 ; i++ ) {
    arrayFib.push(arrayFib[i]+arrayFib[i-1])
  }
  return arrayFib
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe ("sortedArray", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {

    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    
    const output1 = [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    const output2 = [10, 15, 20, 45, 60, 65, 100]

    expect(sortedArray(studyMinutesWeek1)).toEqual(output1)
    expect(sortedArray(studyMinutesWeek2)).toEqual(output2)
  })
})


// b) Create the function that makes the test pass.
// Errors received:
// TypeError: Object.values.sort is not a function
// TypeError: Cannot read properties of undefined (reading 'sort')
// sortedArray
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

const sortedArray = (object1) => {
  // Get the values using object.values,
  // then sort the resulting array of values
  // Using mozilla docs as a resource
  return Object.values(object1).sort((a,b)=>{return a-b})
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe ("arraySums", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {


const accountTransactions1 = [100, -17, -23, -9]
const output1 = [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
const output2 = [250, 161, 261, 165]

const accountTransactions3 = []
const output3 = []



expect(arraySums(accountTransactions1)).toEqual(output1)
expect(arraySums(accountTransactions2)).toEqual(output2)
expect(arraySums(accountTransactions3)).toEqual(output3)

  })
})

// b) Create the function that makes the test pass.

// Received errors:
// ReferenceError: Cannot access 'arraySums' before initialization
// arraySums
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

const arraySums = (array1) => {

  // Check for an empty array
  if (array1[0]==null){
    return array1
  }
  // If array not empty
  else {
    let sum = 0
    return array1.map((val)=>{
      sum += val
      return sum
    })
  }
}

// Final test run
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total