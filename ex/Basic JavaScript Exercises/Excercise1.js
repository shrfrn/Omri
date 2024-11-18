'use strict'

function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

var num1 = 4
var num2 = 5

console.log(num1, "isEven = ", isEven(num1))
console.log(num2, "isEven =", isEven(num2))