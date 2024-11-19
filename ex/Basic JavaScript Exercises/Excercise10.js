'use strict'

function inRange(number, lower, upper) {
    return number <= upper && number >= lower
}

// function inRange(number, lower, upper) {
//     if (number <= upper && number >= lower) {
//         return true
//     } else return false
// }

var number1 = 0
var number2 = 100
var number3 = 80
var number4 = 82
var lower1 = 5
var upper1 = 90

console.log(`The number ${number1} is between ${lower1} and ${upper1} - ${inRange(number1, lower1, upper1)}`)
console.log(`The number ${number2} is between ${lower1} and ${upper1} - ${inRange(number2, lower1, upper1)}`)
console.log(`The number ${number3} is between ${lower1} and ${upper1} - ${inRange(number3, lower1, upper1)}`)
console.log(`The number ${number4} is between ${lower1} and ${upper1} - ${inRange(number4, lower1, upper1)}`)
