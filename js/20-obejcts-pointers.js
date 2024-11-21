'use strict'

var player = {
    name: 'Bob',
    age: 19,
}

var copy = player

copy.age++

console.log(player)

player = 4
console.log(player)
console.log(copy)

copy = 0

