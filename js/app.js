function calculate(){
event.preventDefault();

var num1;
var num2;
var result;
var op;

num1 = document.getElementById("number1").value;
num2 = document.getElementById("number2").value;
op = document.getElementById("operator").value;

if(op == "+")
result = parseInt(num1)  + parseInt(num2);

if(op == "-")
result = parseInt(num1)  - parseInt(num2);

if(op == "*")
result = parseInt(num1)  * parseInt(num2);

if(op == "/")
result = parseInt(num1)  / parseInt(num2);

document.getElementById("result").innerHTML = result;
}