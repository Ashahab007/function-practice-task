/*
! Make a function to calculate the height of a person in ...feet ...inch format
  */

let person = prompt("Enter Your Name: ");
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

console.log(`${person} is ${height}`);

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

let numbers = [5, 6, 11, 12, 98, 5];

function countRepeat(arr) {
  let dupArr = [];

  for (const number of arr) {
    if (dupArr.includes(number) === false) {
      dupArr.push(number);
    }
  }
  return arr.length - dupArr.length;
}

let arrOfNum = countRepeat(numbers);
console.log(arrOfNum);
