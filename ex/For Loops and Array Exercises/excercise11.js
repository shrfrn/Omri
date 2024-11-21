'use strict'

function replaceVowels(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u']
	var newStr = ''

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str.at(i))) newStr += '*'
		else newStr += str.at(i)
	}
	return newStr
}

console.log(replaceVowels('abc')) // Output: "*bc"
console.log(replaceVowels('hello')) // Output: "h*l*"
