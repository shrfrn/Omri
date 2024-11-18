'use strict'

function printPowersOfTwo(limit) {
    var res = 1
    while (res <= limit){
        console.log(res)
        res *= 2
    }
}

var number1 = 32
console.log(`the powers of two upto ${number1} are :`)
printPowersOfTwo(number1)


