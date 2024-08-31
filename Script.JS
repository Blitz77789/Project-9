//Function to preform calcuations and display result
function showResult(){
//Declaring variables
var number1 = 10;
var number2 = 5;

//using operators
var sum = number1 + number2;
var diffrence = number1 - number2;
var product = number1 * number2;
var quoteint = number1 / number2;
var remainder = number1 % number2;

//Displaying each result using innerHTML with concation
document.getElementById('sum').innerHTML = " Sum of " + number1 + " and " + number2 + " is: " + sum;
document.getElementById('diffrence').innerHTML = " Diffrence between " + number1 + " and " + number2 + " is: " + diffrence;
document.getElementById('product').innerHTML = " Product of " + number1 + " and " + number2 + " is: " + product;
document.getElementById('quotient').innerHTML = " Quotient when " + number1 + " is divided by " + number2 + " is: " + quoteint;
document.getElementById('remainder').innerHTML = " Remainder when " + number1 + " is divided by " + number2 + " is: " + remainder;
}
