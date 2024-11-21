'use strict'

function removeDigits(str) {
	var newStr = ''
    
	for (let i = 0; i < str.length; i++) {
		if (str.at(i) >= '0' && str.at(i) <= '9') continue
		newStr += str.at(i)
	}
	return newStr
}

console.log(removeDigits('a1b2c3')) // Output: "abc"
console.log(removeDigits('123abc456def')) // Output: "abcdef"
