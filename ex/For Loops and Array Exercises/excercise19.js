'use strict'

function digitsToWords(num) {
    var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var numStr = num + ''
    var res = ''

    for(var i = 0; i < numStr.length; i++){
        res += digitNames[numStr.at(i)] + ' '
    }
    return res
}
// function digitsToWords(num) {
// 	var numNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// 	var retStr = ''

// 	for (let i = reverseNumber(num); i > 0; i = ~~(i / 10)) {
// 		// console.log(`i = ${i}`)
// 		// console.log(`numNames[i % 10] = ${numNames[i % 10]}`)
// 		retStr += numNames[i % 10] + ' '
// 	}
// 	return retStr
// }

// function reverseNumber(num) {
// 	return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
// }

console.log(digitsToWords(578)) // Output: 'Five Seven Eight'
console.log(digitsToWords(2213)) // Output: 'Two Two One Three'
