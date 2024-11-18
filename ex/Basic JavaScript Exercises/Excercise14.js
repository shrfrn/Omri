'use strict'

function sameLastDigit(num1, num2) {
    if (num1 % 10 === num2 % 10) {
        return true
    } else return false
}

var number1 = 2020
var number2 = 2000
var number3 = 2004

console.log(`the last digit of ${number1} and ${number2} are identical ${sameLastDigit(number1, number2)}`)
console.log(`the last digit of ${number1} and ${number3} are identical ${sameLastDigit(number1, number3)}`)
