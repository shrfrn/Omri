'use strict'

var str = 'Hello javascript you are so cute'
var words = str.split(' ')

console.log(words)

console.log(words.join())

words.sort()
console.log(words)

var res = words.indexOf('Hello')
console.log(res)

console.log(words.reverse())

var revStr = str.split(' ').reverse().join(' ')
console.log(revStr)

var res = words.includes('Hello2')
console.log(res)