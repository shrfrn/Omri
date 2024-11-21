'use strict'


// function findUniqueCharacters(str) {
//   var retStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if (retStr.indexOf(str.at(i)) === -1) retStr += str.at(i)
//   }
//   return retStr
// }


function findUniqueCharacters(str) {
  var retStr = ''
  for (let i = 0; i < str.length; i++) {
    // console.log(`str.at(i) = ${str.at(i)}`)
    // console.log(`retStr = ${retStr}`)
    // console.log(`i = ${i}`)
    // console.log(`str.lastIndexOf(str.at(i)) = i ${str.lastIndexOf(str.at(i)) === i}`)
    if (str.lastIndexOf(str.at(i)) === i) {
      retStr += str.at(i)
    } else {
      i = str.lastIndexOf(str.at(i))
    }
  }
  return retStr
}

console.log(findUniqueCharacters("hello")); // Output: "heo"
console.log(findUniqueCharacters("aabbccddeeffg")); // Output: "g"