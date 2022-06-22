// A javaScript Only Calculator by showgologo

var firstNumber = window.prompt("Input First Number");
var secondNumber = window.prompt("Input Second Number");
var operator = window.prompt("Choose Operator {+} {-} {/} {*} {%}");

if (operator == '+') {
    alert('Your answer is ' + (Number(firstNumber) + Number(secondNumber)));
} else if (operator == "-") {
    alert('Your answer is ' + Number(firstNumber) - Number(secondNumber));
} else if (operator == "/") {
    alert('Your answer is ' + Number(firstNumber) / Number(secondNumber));
} else if (operator == "*") {
    alert('Your answer is ' + Number(firstNumber) * Number(secondNumber));
} else if (operator == "%") {
    alert('Your answer is ' + Number(firstNumber) % Number(secondNumber));
} else {
    alert('Pick out of the available operator')
}