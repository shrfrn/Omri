'use strict'

function removeSpaces(str) {
	var newStr = ''
    
	for (let i = 0; i < str.length; i++) {
		if (str.at(i) !== ' ') newStr += str.at(i)
	}
	return newStr
}

console.log(removeSpaces('hello world')) // Output: "helloworld"
console.log(removeSpaces('  javascript   ')) // Output: "javascript"
