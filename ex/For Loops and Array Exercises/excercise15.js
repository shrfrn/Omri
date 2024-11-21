'use strict'

// function findUniqueCharacters(str) {
//   var retStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if (retStr.indexOf(str.at(i)) === -1) retStr += str.at(i)
//   }
//   return retStr
// }

// function findUniqueCharacters(str) {
//     var newStr = ''

//     for(var i = 0; i < str.length; i++){
//         if (!newStr.includes(str.at(i))) newStr += str.at(i)
//     }
//     return newStr
// }

function findUniqueCharacters(str) {
	var retStr = ''

	for (let i = 0; i < str.length; i++) {
		if (str.lastIndexOf(str.at(i)) === i) {
			retStr += str.at(i)
		} else {
			i = str.lastIndexOf(str.at(i))
		}
	}
	return retStr
}

console.log(findUniqueCharacters('hello')) // Output: "heo"
console.log(findUniqueCharacters('aabbccddeeffg')) // Output: "g"
