'use strict'

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.at(i) !== str[str.length - (i+1)]) return false
  }
  return true
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false