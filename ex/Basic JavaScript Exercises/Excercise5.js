'use strict'
/*
Write a function called absoluteDifference 
that takes a number as a parameter and 
returns the absolute difference between 
that number and 10. 
If the number is greater than 10, 
return double the difference.
*/
// function absoluteDifference(number) {
//     if (number < 0) {
//         return (-1 * number + 10)
//     } else if (number <= 10) {
//         return (10 - number)
//     } else return ((number - 10) * 2)
// }

function absoluteDifference(number) {
    var diff = number - 10
    if (diff < 0) diff *= -1
}

var num1 = -90
var num2 = 9
var num3 = 90

console.log("the result for ", num1, " is ", absoluteDifference(num1))
console.log("the result for ", num2, " is ", absoluteDifference(num2))
console.log("the result for ", num3, " is ", absoluteDifference(num3))

