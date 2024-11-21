'use strict'

function isBalanced(str) {
  var counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str.at(i) === '(') counter++
    if (str.at(i) === ')') counter--
  }
  return !counter
}

console.log(isBalanced("(())")); // Output: true
console.log(isBalanced("(()")); // Output: false