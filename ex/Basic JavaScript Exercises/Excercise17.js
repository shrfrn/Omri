'use strict'

function calculateDiscount(total) {
    if (total > 100 && total < 200) {
        return 0.9 * total
    } else if (total >= 200) {
        return 0.85 * total
    } else return total
}

var number1 = 80
var number2 = 101
var number3 = 200
var number4 = 400

console.log(calculateDiscount(number1))
console.log(calculateDiscount(number2))
console.log(calculateDiscount(number3))
console.log(calculateDiscount(number4))
