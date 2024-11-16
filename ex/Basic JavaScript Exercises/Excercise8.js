'use strict'

function checkSpeed(speed) {
    if (speed <= 60) {
        return 'No Ticket'
    } else if (speed <= 80) {
        return 'Small Ticket'
    } else {
        return 'Big Ticket'
    }
}

var speed1 = 2
var speed2 = 60
var speed3 = 80
var speed4 = 82


console.log(`The speed ${speed1} is ${checkSpeed(speed1)}`)
console.log(`The speed ${speed2} is ${checkSpeed(speed2)}`)
console.log(`The speed ${speed3} is ${checkSpeed(speed3)}`)
console.log(`The speed ${speed4} is ${checkSpeed(speed4)}`)

