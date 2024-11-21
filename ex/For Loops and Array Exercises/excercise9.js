'use strict'


function maskString(str) {
  return '*'.repeat(str.length - 4) + str.slice(-4)
}

console.log(maskString("123456789")); // Output: "*****6789"
console.log(maskString("abcdefg")); // Output: "***defg"