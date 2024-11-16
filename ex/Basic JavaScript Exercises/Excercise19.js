'use strict'

function rectangleArea() {
    var number1 = +prompt('Enter first side')
    var number2 = +prompt('Enter second side')
    return `the area is ${number1 * number2} and the sum is ${number1 + number2}`        
}

console.log(rectangleArea())
