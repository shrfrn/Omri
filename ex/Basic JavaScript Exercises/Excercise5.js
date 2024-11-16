'use strict'

function absoluteDifference(number) {
    if (number < 0) {
        return (-1 * number + 10)
    } else if (number <= 10) {
        return (10 - number)
    } else return ((number - 10) * 2)
}

var num1 = -90
var num2 = 9
var num3 = 90

console.log("the result for ", num1, " is ", absoluteDifference(num1))
console.log("the result for ", num2, " is ", absoluteDifference(num2))
console.log("the result for ", num3, " is ", absoluteDifference(num3))

