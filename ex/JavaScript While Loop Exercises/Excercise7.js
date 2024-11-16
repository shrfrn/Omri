'use strict'

function isprime(num) {
    if (num === 2) return true
    if (num < 2 || num % 2 === 0) return false
    
    var res = 3
    while (res <= Math.floor(Math.sqrt(num))){
        if (num % res === 0) return false
        res++
    }
    return true
}

var number1 = 0
var number2 = 2
var number3 = 3
var number4 = 8
var number5 = 11
var number6 = 17
console.log(`the number ${number1} is a prime : ${isprime(number1)}`)
console.log(`the number ${number2} is a prime : ${isprime(number2)}`)
console.log(`the number ${number3} is a prime : ${isprime(number3)}`)
console.log(`the number ${number4} is a prime : ${isprime(number4)}`)
console.log(`the number ${number5} is a prime : ${isprime(number5)}`)
console.log(`the number ${number6} is a prime : ${isprime(number6)}`)


