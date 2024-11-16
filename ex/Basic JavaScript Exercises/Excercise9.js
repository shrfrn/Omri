'use strict'

function convertToFahrenheit(celsius) {
    return celsius * 9/5 + 32
}

var celsius1 = 0
var celsius2 = 100
var celsius3 = 80
var celsius4 = 82


console.log(`The celsius ${celsius1} is Fahrenheit ${convertToFahrenheit(celsius1)}`)
console.log(`The celsius ${celsius2} is Fahrenheit ${convertToFahrenheit(celsius2)}`)
console.log(`The celsius ${celsius3} is Fahrenheit ${convertToFahrenheit(celsius3)}`)
console.log(`The celsius ${celsius4} is Fahrenheit ${convertToFahrenheit(celsius4)}`)

