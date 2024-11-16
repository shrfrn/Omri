'use strict'

function greet(name, isMorning) {
    if (isMorning === true) {
        return (`Good morning, ${name}!`)
    } else return (`Hello, ${name}!`)
}

console.log(greet('Albert', true))
console.log(greet('Menahem', false))

