'use strict'

function convertMinutes(minutes) {
    return `${Math.floor(minutes / 60)} Hours and ${(minutes % 60)} minutes`
}

var number1 = 130
var number2 = 45

console.log(convertMinutes(number1))
console.log(convertMinutes(number2))
