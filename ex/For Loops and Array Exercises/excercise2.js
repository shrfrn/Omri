'use strict'

function reverseString(str) {
  var newStr = ''
  for (let index = str.length - 1; index >=0; index--) {
    newStr += str.at(index)
  }
  return newStr
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("javascript")); // Output: "tpircsavaj"