'use strict'


function repeatVowels(str) {
  var Vowels = ['a', 'e', 'i', 'o', 'u']
  var newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += str.at(i)
    if (Vowels.includes(str.at(i))) newStr += str.at(i)
  }
  return newStr
}

console.log(repeatVowels("abc")); // Output: "aabc"
console.log(repeatVowels("hello")); // Output: "heeloo"