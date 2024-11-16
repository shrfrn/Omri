'use strict'

function largestDigit(num) {
    var largest = num % 10
    num = Math.floor(num / 10)
    while (num > 0) {
        if (num % 10 > largest) largest = num % 10
        num = Math.floor(num / 10)
    }
    return largest
}

var number1 = 120
var number2 = 23
var number3 = 39
var number4 = 87659
var number5 = 11
var number6 = 7
console.log(`the largest digit in number ${number1} is : ${largestDigit(number1)}`)
console.log(`the largest digit in number ${number2} is : ${largestDigit(number2)}`)
console.log(`the largest digit in number ${number3} is : ${largestDigit(number3)}`)
console.log(`the largest digit in number ${number4} is : ${largestDigit(number4)}`)
console.log(`the largest digit in number ${number5} is : ${largestDigit(number5)}`)
console.log(`the largest digit in number ${number6} is : ${largestDigit(number6)}`)


