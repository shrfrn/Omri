'use strict'

function minimumOfThree(a, b, c) {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else return c
}

var number1 = 0
var number2 = 100
var number3 = 80

console.log(`The smallest number between ${number1}, ${number2} and ${number3} is ${minimumOfThree(number1, number2, number3)}`)


var number1 = 0
var number2 = -100
var number3 = 80
console.log(`The smallest number between ${number1}, ${number2} and ${number3} is ${minimumOfThree(number1, number2, number3)}`)