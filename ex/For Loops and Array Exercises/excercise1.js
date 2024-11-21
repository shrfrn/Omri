'use strict'

function countVowels(str) {
    const vowels = 'aeiouAEIOU'
    var counter = 0

    for(var i = 0; i < str.length; i++){
        if (vowels.includes(str.at(i))) counter++
    }
    return counter
}

// function countVowels(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u']
//   var count = 0

//   for (let i = 0; i < vowels.length; i++) {
//       count += countAllOccurances(vowels[i], str)
//   }
//   return count
// }

// function countAllOccurances(vowel, word){
//   var count = 0
//   var offset = word.indexOf(vowel)  

//   while (offset !== -1){
//       count++
//       offset = word.indexOf(vowel, offset + 1)
//   }
//   return count
// }
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("wawawiwa")); // Output: 4