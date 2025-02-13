/*
! Make a function to calculate the height of a person in ...feet ...inch format
  */

/* let person = prompt("Enter Your Name: ");
let heightInInch = parseInt(prompt("Enter Height in Inches:", 0));

function inchToFt(inch) {
  let feet = parseInt(inch / 12);
  //   console.log(feet);
  let fraction = inch % 12;
  //   console.log(fraction);

  let result = feet + " feet " + fraction + " inch";
  return result;
}

let height = inchToFt(heightInInch);

console.log(`${person} is ${height}`); */

//! Leap Year
/*
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2. if the year is divisible by 400, then it is a leap year
 * 3. else it is not a leap year
 */

function isLeapYear(params) {
  if (params % 100 !== 0 && params % 4 === 0) {
    return true;
  } else if (params % 400) {
    return true;
  }
  return false;
}

let leapYear = isLeapYear(2100);
let leapYear2 = isLeapYear(2400);
let leapYear3 = isLeapYear(1900);
console.log(leapYear, leapYear2, leapYear3);

/* 
!Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. 
*/

function cToF(param) {
  let result = param * (9 / 5) + 32;
  return result;
}

let temInC = cToF(22);
console.log(`Today's temperature is ${temInC}°F.`);

/* 
!Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

let numbers = [5, 6, 11, 12, 98, 5, 11];
// console.log(numbers.indexOf(5) === numbers.lastIndexOf(5));
let findVal = 5;

function countRepeat(arr) {
  let findDup = arr.filter((val) => findVal === val);
  return findDup;
}

let arrOfNum = countRepeat(numbers);
// console.log(arrOfNum);
console.log(`The input number ${findVal} is ${arrOfNum.length} times.`);

// ! Task 3
/* Write a function to count the number of vowels in a string. */

let sentence = "i love programming hero practice task. do u like?";

function countVowels(sentence) {
  let count = 0;
  for (const word of sentence) {
    if (
      word === "a" ||
      word === "e" ||
      word === "i" ||
      word === "o" ||
      word === "u"
    ) {
      count++;
    }
  }
  return count;
}

let vowelCounterApp = countVowels(sentence);
console.log("The sentence contains", vowelCounterApp, "vowels.");

// !Task-4:
/*Write a function to find the longest word in a given string. sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

let topic = "I am learning Programming to become a programmer";
// console.log(topic.split(" "));

function findLongestWord(sentence) {
  let sentenceConToArr = sentence.split(" ");
  let longWord = "";
  for (let word of sentenceConToArr) {
    if (word.length > longWord.length) {
      longWord.length = word.length;
      longWord = word;
    }
  }
  console.log("The long word is: ", longWord);
}

findLongestWord(topic);

//! Task-5:
/* 
Generate a random number between 10 to 20.
*/
function createRanNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let random = createRanNum(10, 20);
console.log("Random number (10 - 20) is now", random);

/* Calculate the average of even numbers from a given array */

const myArr = [10, 25, 15, 24, 8, 30, 17, 37, 40];

function evenNumAvg(array) {
  let evens = [];
  for (const number of array) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  // console.log(evens);

  // Calculate the average of array of even numbers
  let sum = 0;
  let len = evens.length;
  for (const even of evens) {
    sum = sum + even;
  }
  let average = sum / len;
  return average;
}

const avgOfEven = evenNumAvg(myArr);
console.log("Average of even number array is: ", avgOfEven);
