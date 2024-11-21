'use strict'


function countWordOccurrences(sentence, word) {
  var array = sentence.split(/[ ,]/)
  var Count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) Count++ 
  }
  return Count
}

console.log(countWordOccurrences("hello world hello", "hello")); // Output: 2
console.log(countWordOccurrences("this is a test, this is only a test", "test")); // Output: 2