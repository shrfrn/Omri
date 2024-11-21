'use strict'

function titleCase(sentence) {
	var array = sentence.split(' ')

	for (let i = 1; i < array.length; i++) {
		array[i] = array[i].at(0).toUpperCase() + array[i].substring(1)
	}
	return array.join(' ')
}

console.log(titleCase('The quick brown fox jumps over the lazy dog')) // Output: "jumps"
console.log(titleCase('JavaScript is amazing')) // Output: "JavaScript"
