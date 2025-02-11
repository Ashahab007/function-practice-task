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
