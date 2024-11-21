'use strict'

function capitalizeAlternate(str) {
  var retStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      var char = str.at(i).toUpperCase()
      retStr += char
    } else retStr += str.at(i)
  }
  return retStr
}

console.log(capitalizeAlternate("hello world")); // Output: "HeLlO WoRlD"
console.log(capitalizeAlternate("javascript is fun!")); // Output: "JaVaScRiPt Is FuN!"