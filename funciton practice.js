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
console.log(arrOfNum.length);

// ! Task 3 (Skipped)
/* Write a function to count the number of vowels in a string. */

let sentence = "i love programming hero practice task. do u like?";

/* function countVowels(sentence) {
  // let vowel = "a" || "e" || "i" || "o" || "u";
  let result = sentence.split("").filter((val) => "a" || "e" === val);
  console.log(result);
}

countVowels(sentence);
 */

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
  console.log(longWord);
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
console.log(random);
