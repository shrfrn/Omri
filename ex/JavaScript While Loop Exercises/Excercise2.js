'use strict'

function power(x, y){
    var res = x
    while (y > 1) {
        res *= x
        y--
    }
    return res
}

var number1 = 2
var number2 = 3

console.log(`${number1} to the power of ${number2} equals ${power(number1, number2)}`)
