var number1 = 34;
var number2 = 8;

function addNumbers(number1, number2) {
    var sum = number1 + number2;
    return sum;
}
document.write("Sum = " + addNumbers(number1, number2));

// or

document.write("<br>");

var addNumbers = function(number1, number2) {
    var sum = number1 + number2;
    return sum;
}
document.write("Sum = " + addNumbers(number1, number2));



// part 2
document.write("<br><br><br>");


var numb1 = 76;
var numb2 = 12;

var addNumbers2 = (numb1, numb2) => numb1 + numb2;
document.write("Sum = " + addNumbers(numb1, numb2));











