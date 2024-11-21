'use strict'

function countVowels(str) {
  var Vowels = ['a', 'e', 'i', 'o', 'u']
  var Count = 0
  for (let i = 0; i < Vowels.length; i++) {
      Count += countAllOccurances(Vowels[i], str)
  }
  return Count
}

function countAllOccurances(Vowel, Word){
  var Count = 0
  var Offset = Word.indexOf(Vowel)  
  while ( Offset !== -1){
      Count++
      Offset = Word.indexOf(Vowel, Offset + 1)
  }
  return Count
}
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("wawawiwa")); // Output: 4