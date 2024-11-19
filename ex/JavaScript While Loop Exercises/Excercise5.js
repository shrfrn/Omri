'use strict'

function gdc(a, b) {
    var smaller = Math.min(a, b)
    var gdc = 1
    var i = 1

    while (i <= smaller){
        if (a % i === 0 && b % i === 0) {
            gdc = i
        }
        i++
    }
  
    return gdc;
}

var number1 = 18
var number2 = 12
console.log(`the greatest common divisor of ${number1} and ${number2} is ${gdc(number1, number2)}`)
