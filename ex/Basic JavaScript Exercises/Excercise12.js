'use strict'

function isDivisible(num, divisor) {
    if (num % divisor === 0) {
        return true
    } else return false
}
var number1 = 12
var number2 = 3

console.log(`${number1} is divisible by ${number2} ${isDivisible(number1, number2)}`)

var number1 = 12
var number2 = 5

console.log(`${number1} is divisible by ${number2} ${isDivisible(number1, number2)}`)
