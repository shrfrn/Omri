'use strict'

function reverseString(str) {
	var newStr = ''

	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str.at(i)
	}
	return newStr
}

console.log(reverseString('hello')) // Output: "olleh"
console.log(reverseString('javascript')) // Output: "tpircsavaj"
