// business logic
function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

// user interface logic
const addnum1 = prompt("Enter a number:");
const addnum2 = prompt("Enter another number:");

window.alert(add(addnum1, addnum2));