'use strict'

function sameLastDigits(num1, num2, numOfDigits) {
    if (isNaN(num1) || isNaN(num2) || isNaN(numOfDigits) || numOfDigits < 0) {
        return false
    }
    var str1 = num1.toString()
    var str2 = num2.toString()
    numOfDigits *= -1

    if (str1.slice(numOfDigits) === str2.slice(numOfDigits)) {
        return true
    } else return false
}

var number1 = 20200
var number2 = 2000
var number3 = 3

console.log(`the last ${number3} digit of ${number1} and ${number2} are identical ${sameLastDigits(number1, number2, number3)}`)


var number3 = 2
console.log(`the last ${number3} digit of ${number1} and ${number2} are identical ${sameLastDigits(number1, number2, number3)}`)

var number1 = 'Albert'
var number2 = 2000
var number3 = 3

console.log(`the last ${number3} digit of ${number1} and ${number2} are identical ${sameLastDigits(number1, number2, number3)}`)

var number1 = 20200
var number2 = 2000
var number3 = -2

console.log(`the last ${number3} digit of ${number1} and ${number2} are identical ${sameLastDigits(number1, number2, number3)}`)
