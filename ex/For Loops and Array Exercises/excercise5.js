'use strict'

function countWordOccurrences(sentence, word) {
	var array = sentence.split(/[ ,]/)
	var count = 0

	for (let i = 0; i < array.length; i++) {
		if (array[i] === word) count++
	}
	return count
}

console.log(countWordOccurrences('hello world hello', 'hello')) // Output: 2
console.log(countWordOccurrences('this is a test test test, this is only a test', 'test')) // Output: 2
