// business logic
function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

// user interface logic
const addnum1 = prompt("Enter a number to add:");
const addnum2 = prompt("Enter another number to add:");

window.alert("The sum is " + add(addnum1, addnum2) + ".");

const subnum1 = prompt("Enter a number to subtract:");
const subnum2 = prompt("Enter another number to subtract:");

window.alert("The difference is " + subtract(subnum1, subnum2) + ".");

const multnum1 = prompt("Enter a number to multiply:");
const multnum2 = prompt("Enter another number to multiply:");

window.alert("The product is " + multiply(multnum1, multnum2) + ".");

const divnum1 = prompt("Enter a number to divide:");
const divnum2 = prompt("Enter another number to divide:");

window.alert("The quotient is " + divide(divnum1, divnum2) + ".");