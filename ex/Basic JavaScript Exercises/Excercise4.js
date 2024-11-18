'use strict'

function calculate(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2
    } else if (operation === 'subtract') {
        return num1 - num2
    } else if (operation === 'multiply') {
        return num1 * num2
    } else if (operation === 'divide') {
        return num1 / num2
    } else {
        return "invalid operation " + operation
    } 
}
var a = 90
var b = 80

console.log(a, "add", b, " is ", calculate(a,b,"add"))
console.log(a, "subtract", b, " is ", calculate(a,b,"subtract"))
console.log(a, "multiply", b, " is ", calculate(a,b,"multiply"))
console.log(a, "divide", b, " is ", calculate(a,b,"divide"))
console.log(a, "blahh", b, " is ", calculate(a,b,"blahh"))

