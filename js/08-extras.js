'use strict'

function foo() {
    var num = 9
    console.log(num)
}

// foo()
// console.log(num)

// var num = 10
// var res = (num > 8) ? 'yes' : 'no'

// console.log(res)

// var x = false
// var isAdmin = x && foo()

// console.log(isAdmin)

var res = factorial(NaN)
console.log(res)

function factorial(num) {
    if (isNaN(num)) return -1

    var res = 1
    var i = 2

    while (i <= num) {
        res *= i++
    }
    return res
}
