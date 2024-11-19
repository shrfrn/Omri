'use strict'

// String
var str = 'Hello'

var res = str.charAt(3)
console.log(res)

console.log(str[3]) // Don't use this

var res = str.at(-3)
console.log(res)

var res = str.toUpperCase()
console.log(res)

var res = str.toLowerCase()
console.log(res)

var res = str.indexOf('l', 4)
console.log(res)

console.log(str.length)

console.log(String.fromCharCode(97))

// Strings are immutable

str += '!'
console.log(str)

// Math

var res = Math.max(3, 9, 9, 8, 7)
console.log(res)

function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

res = getRandomInt(3, 90)
console.log(res)


// Date

console.log(Date.now())