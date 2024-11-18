'use strict'

function smallestDivisor(num){
    num = Math.abs(num)
    if (num <= 2) return num
    var div = 2
    while (div < num) {
        if (num % div === 0) return div
        div++
    }
    return num
}

var number1 = 0
console.log(`the smallest divisor of ${number1} is ${smallestDivisor(number1)}`)
var number1 = 1
console.log(`the smallest divisor of ${number1} is ${smallestDivisor(number1)}`)
var number1 = 2
console.log(`the smallest divisor of ${number1} is ${smallestDivisor(number1)}`)
var number1 = 3
console.log(`the smallest divisor of ${number1} is ${smallestDivisor(number1)}`)
var number1 = 4
console.log(`the smallest divisor of ${number1} is ${smallestDivisor(number1)}`)
var number1 = 7
console.log(`the smallest divisor of ${number1} is ${smallestDivisor(number1)}`)
