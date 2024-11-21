'use strict'

function findLongestWord(sentence) {
	var array = sentence.split(' ')
	var maxLength = array[0].length
	var longestWord = array[0]
    
	for (let i = 1; i < array.length; i++) {
		if (array[i].length >= maxLength) {
			maxLength = array[i].length
			longestWord = array[i]
		}
	}
	return longestWord
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')) // Output: "jumps"
console.log(findLongestWord('JavaScript is amazing')) // Output: "JavaScript"
