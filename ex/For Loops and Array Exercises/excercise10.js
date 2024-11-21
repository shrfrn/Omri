'use strict'

function repeatVowels(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u']
	var newStr = ''
    
	for (let i = 0; i < str.length; i++) {
		newStr += str.at(i)
		if (vowels.includes(str.at(i))) newStr += str.at(i)
	}
	return newStr
}

console.log(repeatVowels('abc')) // Output: "aabc"
console.log(repeatVowels('hello')) // Output: "heeloo"
