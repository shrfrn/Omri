'use strict'

function greet(name, isMorning) {
    if (isMorning) return `Good morning, ${name}!`
    return (`Hello, ${name}!`)
}

console.log(greet('Albert', true))
console.log(greet('Menahem', false))