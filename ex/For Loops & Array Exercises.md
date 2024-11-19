
---
## Exercise 1: Count Vowels
Write a function `countVowels` that takes a string and counts the number of vowels (`a, e, i, o, u`) in it using a `for` loop.  
```javascript
function countVowels(str) {
  // Your code here
}

console.log(countVowels("hello")); // Output: 2
console.log(countVowels("javascript")); // Output: 3
```

---

## Exercise 2: Reverse a String
Write a function `reverseString` that reverses a string using a `for` loop.  
```javascript
function reverseString(str) {
  // Your code here
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("javascript")); // Output: "tpircsavaj"
```

---

## Exercise 3: Capitalize Every Other Letter
Write a function `capitalizeAlternate` that capitalizes every other letter in a string using a `for` loop. Ignore non-alphabet characters for the alternation.  
```javascript
function capitalizeAlternate(str) {
  // Your code here
}

console.log(capitalizeAlternate("hello world")); // Output: "HeLlO WoRlD"
console.log(capitalizeAlternate("javascript is fun!")); // Output: "JaVaScRiPt Is FuN!"
```

---

## Exercise 4: Find Palindromes
Write a function `isPalindrome` that checks if a string is a palindrome (reads the same backward as forward) using a `for` loop.  
```javascript
function isPalindrome(str) {
  // Your code here
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

---

## Exercise 5: Count Word Occurrences
Write a function `countWordOccurrences` that counts how many times a specific word appears in a string. Use a `for` loop and the `String` method `.split()`.  
```javascript
function countWordOccurrences(sentence, word) {
  // Your code here
}

console.log(countWordOccurrences("hello world hello", "hello")); // Output: 2
console.log(countWordOccurrences("this is a test, this is only a test", "test")); // Output: 2
```

---

## Exercise 6: Remove All Digits
Write a function `removeDigits` that removes all numeric digits from a string using a `for` loop.  
```javascript
function removeDigits(str) {
  // Your code here
}

console.log(removeDigits("a1b2c3")); // Output: "abc"
console.log(removeDigits("123abc456def")); // Output: "abcdef"
```

---

## Exercise 7: Find the Longest Word
Write a function `findLongestWord` that finds the longest word in a string. Use a `for` loop and the `String` method `.split()`.  
```javascript
function findLongestWord(sentence) {
  // Your code here
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is amazing")); // Output: "JavaScript"
```

---

## Exercise 8: Title Case a Sentence
Write a function `titleCase` that capitalizes the first letter of each word in a string using a `for` loop.  
```javascript
function titleCase(sentence) {
  // Your code here
}

console.log(titleCase("hello world from javascript")); 
// Output: "Hello World From Javascript"

console.log(titleCase("practice makes perfect")); 
// Output: "Practice Makes Perfect"
```

---

## Exercise 9: Mask a String
Write a function `maskString` that replaces all but the last 4 characters of a string with `*`. Use a `for` loop.  
```javascript
function maskString(str) {
  // Your code here
}

console.log(maskString("123456789")); // Output: "*****6789"
console.log(maskString("abcdefg")); // Output: "***defg"
```

---
## Exercise 10: Repeat Vowels
Write a function `repeatVowels` that duplicates every vowel in a string using a `for` loop.  
```javascript
function repeatVowels(str) {
  // Your code here
}

console.log(repeatVowels("abc")); // Output: "aabc"
console.log(repeatVowels("hello")); // Output: "heeloo"
```

---

## Exercise 11: Replace Vowels
Write a function `replaceVowels` that replaces all vowels in a string with the character `*` using a `for` loop.  
```javascript
function replaceVowels(str) {
  // Your code here
}

console.log(replaceVowels("hello")); // Output: "h*ll*"
console.log(replaceVowels("javascript")); // Output: "j*v*scr*pt"
```

---

## Exercise 12: Remove Spaces
Write a function `removeSpaces` that removes all spaces from a string using a `for` loop.  
```javascript
function removeSpaces(str) {
  // Your code here
}

console.log(removeSpaces("hello world")); // Output: "helloworld"
console.log(removeSpaces("  javascript   ")); // Output: "javascript"
```

---

## Exercise 13: Check Anagram
Write a function `isAnagram` that checks if two strings are anagrams (contain the same characters in any order) using a `for` loop and string methods.  
```javascript
function isAnagram(str1, str2) {
  // Your code here
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
```

---

## Exercise 14: Shorten Repeated Characters
Write a function `shortenRepeats` that shortens any sequence of repeated characters to just one character.  
```javascript
function shortenRepeats(str) {
  // Your code here
}

console.log(shortenRepeats("aaabbccc")); // Output: "abc"
console.log(shortenRepeats("hellooo!!")); // Output: "helo!"
```

---

## Exercise 15: Find Unique Characters
Write a function `findUniqueCharacters` that returns a string of unique characters (characters that appear only once) using a `for` loop.  
```javascript
function findUniqueCharacters(str) {
  // Your code here
}

console.log(findUniqueCharacters("hello")); // Output: "heo"
console.log(findUniqueCharacters("aabbccddeeffg")); // Output: "g"
```

---

## Exercise 16: Check Balanced Parentheses
Write a function `isBalanced` that checks if a string of parentheses `()` is balanced using a `for` loop.  
```javascript
function isBalanced(str) {
  // Your code here
}

console.log(isBalanced("(())")); // Output: true
console.log(isBalanced("(()")); // Output: false
```

---

## Exercise 17: Count Substring Occurrences
Write a function `countSubstring` that counts how many times a substring appears in a string using a `for` loop and the `.substring()` method.  
```javascript
function countSubstring(str, sub) {
  // Your code here
}

console.log(countSubstring("hellohello", "lo")); // Output: 2
console.log(countSubstring("abababab", "ab")); // Output: 4
```

---

## Exercise 18: Remove Duplicate Words
Write a function `removeDuplicateWords` that removes duplicate words from a string using a `for` loop.  
```javascript
function removeDuplicateWords(sentence) {
  // Your code here
}

console.log(removeDuplicateWords("this is is a test test")); 
// Output: "this is a test"

console.log(removeDuplicateWords("hello hello world")); 
// Output: "hello world"
```

---
## Exercise 19: Digits to words

Write a function `digitsToWords()` which takes a number and prints the names of all its digits.

```javascript
function digitsToWords(num) {
	// Your code here
}

console.log(digitsToWords(578))   // Output: 'Five Seven Eight'
console.log(digitsToWords(2213))  // Output: 'Two Two One Three'
```

---
## Exercise 20: Shuffle array

Write a function `shuffleArray()` which takes an array and returns an array of shuffled elements. A second parameter to the function determines whether the operation is performed on the original array or on a copy.

```javascript
function shuffleArray(arr, mutate) {
	// Your code here
}

console.log(shuffleArray([1, 2, 3, 4], true))   
// Output: [2, 4, 3, 1] (changes the original array)

console.log(shuffleArray(['dog', 'cat', 'bob'], false))  
// Output: ['bob', 'cat', 'dog'] (The original array remains unchanged)
```