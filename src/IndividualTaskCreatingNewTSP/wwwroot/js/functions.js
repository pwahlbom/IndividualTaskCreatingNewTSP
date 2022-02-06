// function expression 1
//let result1 = addNumbers1(3, 2); // this function expression creates an error
var addNumbers1 = function (number1, number2) {
    return number1 + number2;
};
// function expression 2
var addNumbers2 = function (number1, number2) {
    return number1 + number2;
};
var result2 = addNumbers2(3, 2); // this function expression does not create and error
/////////////////////////////////////////////////////////////////////////////
// function statement
var result3 = multiplyNumbers(3, 2); // this does not create an error
function multiplyNumbers(number1, number2) {
    return number1 * number2;
}
result3 = multiplyNumbers(3, 2); // this does not create an error
/////////////////////////////////////////////////////////////////////////////
document.addEventListener("click", function () {
    alert("hi");
    console.log("hi");
});
var doSomething1 = function () {
    return "Do Something!";
};
alert(doSomething1());
//# sourceMappingURL=functions.js.map