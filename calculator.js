// A javaScript Only Calculator

var firstNumber = window.prompt("Input Fist Number");
var secondNumber = window.prompt("Input Second Number");
var operator = window.prompt("Choose Operator + - / * %");

if (operator == '+') {
    alert(Number(firstNumber) + Number(secondNumber));
} else if (operator == "-") {
    alert(Number(firstNumber) - Number(secondNumber));
} else if (operator == "/") {
    alert(Number(firstNumber) / Number(secondNumber));
} else if (operator == "*") {
    alert(Number(firstNumber) * Number(secondNumber));
} else if (operator == "%") {
    alert(Number(firstNumber) % Number(secondNumber));
} else {
    alert('Pick out of the available operator')
}