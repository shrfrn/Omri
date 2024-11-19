'use strict'

function countDigits(num){
    num = num < 0 ? -num : num
    if (num === 0) return 1
    
    var numberOfDigits = 0
    while (num / 10 > 0){
        numberOfDigits++
        num = Math.floor(num / 10)
    }
    return numberOfDigits
}

var number1 = -12345
var number2 = 1
var number3 = 0
var number4 = 10045

console.log(`the number of digits in ${number1} are ${countDigits(number1)}`)
console.log(`the number of digits in ${number2} are ${countDigits(number2)}`)
console.log(`the number of digits in ${number3} are ${countDigits(number3)}`)
console.log(`the number of digits in ${number4} are ${countDigits(number4)}`)
