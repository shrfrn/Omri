'use strict'

function isDivisible(num, divisor) {
    return (num % divisor) === 0
}
var number1 = 12
var number2 = 3

console.log(`${number1} is divisible by ${number2} ${isDivisible(number1, number2)}`)

var number1 = 12
var number2 = 5

console.log(`${number1} is divisible by ${number2} ${isDivisible(number1, number2)}`)
