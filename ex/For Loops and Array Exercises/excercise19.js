'use strict'
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
}

function digitsToWords(num) {
	var numNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  var retStr = ''
  for (let i = reverseNumber(num); i > 0; i = ~~(i / 10)) {
    // console.log(`i = ${i}`)
    // console.log(`numNames[i % 10] = ${numNames[i % 10]}`)
    retStr += numNames[i % 10] + ' '
  }
  return retStr
}

console.log(digitsToWords(578))   // Output: 'Five Seven Eight'
console.log(digitsToWords(2213))  // Output: 'Two Two One Three'