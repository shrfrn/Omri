'use strict'

function sumDigits(num){
    num = Math.abs(num)
    var res = 0
    var stopLoop = num
    while (stopLoop > 0){
        res += stopLoop % 10
        stopLoop = Math.floor(stopLoop / 10)
    }
    return res
}

var number1 = -1230
console.log(`the sum of the digits of ${number1} is ${sumDigits(number1)}`)
var number1 = 17
console.log(`the sum of the digits of ${number1} is ${sumDigits(number1)}`)
var number1 = 2
console.log(`the sum of the digits of ${number1} is ${sumDigits(number1)}`)
