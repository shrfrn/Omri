
### Exercise 1: Even or Odd
Write a function called `isEven` that takes one number as a parameter and returns `true` if the number is even and `false` if the number is odd.

```javascript
function isEven(number) {
    // Your code here
}
```

**Example**:
```javascript
console.log(isEven(4))  // Output: true
console.log(isEven(7))  // Output: false
```

---

### Exercise 2: Greater Number
Write a function called `greaterNumber` that takes two numbers as parameters and returns the larger of the two.

```javascript
function greaterNumber(a, b) {
    // Your code here
}
```

**Example**:
```javascript
console.log(greaterNumber(10, 20))  // Output: 20
console.log(greaterNumber(5, 3))    // Output: 5
```

---

### Exercise 3: Calculate Grade
Write a function called `getGrade` that takes a number as a parameter representing a score (0 to 100). Return `"A"` for scores 90 or above, `"B"` for scores 80–89, `"C"` for scores 70–79, `"D"` for scores 60–69, and `"F"` for any score below 60.

```javascript
function getGrade(score) {
    // Your code here
}
```

**Example**:
```javascript
console.log(getGrade(85))  // Output: "B"
console.log(getGrade(72))  // Output: "C"
```

---

### Exercise 4: Simple Calculator
Write a function called `calculate` that takes three parameters: two numbers and a string representing an operation (`"add"`, `"subtract"`, `"multiply"`, or `"divide"`). Return the result of the operation on the two numbers.

```javascript
function calculate(num1, num2, operation) {
    // Your code here
}
```

**Example**:
```javascript
console.log(calculate(5, 3, "add"))       // Output: 8
console.log(calculate(10, 2, "divide"))   // Output: 5
```

---

### Exercise 5: Absolute Difference
Write a function called `absoluteDifference` that takes a number as a parameter and returns the absolute difference between that number and 10. If the number is greater than 10, return double the difference.

```javascript
function absoluteDifference(number) {
    // Your code here
}
```

**Example**:
```javascript
console.log(absoluteDifference(5))   // Output: 5
console.log(absoluteDifference(12))  // Output: 4
```

---

### Exercise 6: Greeting Message
Write a function called `greet` that takes a name and a boolean value `isMorning`. If `isMorning` is true, return `"Good morning, [name]!"`. Otherwise, return `"Hello, [name]!"`.

```javascript
function greet(name, isMorning) {
    // Your code here
}
```

**Example**:
```javascript
console.log(greet("Sharon", true))    // Output: "Good morning, Sharon!"
console.log(greet("Shahar", false))   // Output: "Hello, Shahar!"
```

---

### Exercise 7: Age Category
Write a function called `ageCategory` that takes an age as a parameter and returns `"Child"` if the age is under 13, `"Teen"` if the age is between 13 and 19, and `"Adult"` if the age is 20 or older.

```javascript
function ageCategory(age) {
    // Your code here
}
```

**Example**:
```javascript
console.log(ageCategory(10))  // Output: "Child"
console.log(ageCategory(15))  // Output: "Teen"
console.log(ageCategory(25))  // Output: "Adult"
```


### Exercise 8: Speeding Ticket
Write a function called `checkSpeed` that takes a speed as a parameter and returns `"No Ticket"` if the speed is 60 or below, `"Small Ticket"` if the speed is between 61 and 80, and `"Big Ticket"` if the speed is above 80.

```javascript
function checkSpeed(speed) {
    // Your code here
}
```

**Example**:
```javascript
console.log(checkSpeed(55))  // Output: "No Ticket"
console.log(checkSpeed(75))  // Output: "Small Ticket"
console.log(checkSpeed(85))  // Output: "Big Ticket"
```

---

### Exercise 9: Convert Temperature
Write a function called `convertToFahrenheit` that takes a Celsius temperature as a parameter and returns the equivalent temperature in Fahrenheit. Use the formula: `F = C * 9/5 + 32`.

```javascript
function convertToFahrenheit(celsius) {
    // Your code here
}
```

**Example**:
```javascript
console.log(convertToFahrenheit(0))    // Output: 32
console.log(convertToFahrenheit(100))  // Output: 212
```

---

### Exercise 10: Number Range
Write a function called `inRange` that takes a number, and lower & upper boundary values as parameters, and returns `true` if the number is between within the boundary range (inclusive) or `false` otherwise.

```javascript
function inRange(number, lower, upper) {
    // Your code here
}
```

**Example**:
```javascript
console.log(inRange(50, 1, 100))    // Output: true
console.log(inRange(150, 10, 100))  // Output: false
```

---

### Exercise 11: Minimum of Three
Write a function called `minimumOfThree` that takes three numbers as parameters and returns the smallest of the three.

```javascript
function minimumOfThree(a, b, c) {
    // Your code here
}
```

**Example**:
```javascript
console.log(minimumOfThree(3, 5, 2))    // Output: 2
console.log(minimumOfThree(10, 8, 15))  // Output: 8
```

---

### Exercise 12: Divisibility Check
Write a function called `isDivisible` that takes two numbers, `num` and `divisor`. Return `true` if `num` is divisible by `divisor`, and `false` otherwise.

```javascript
function isDivisible(num, divisor) {
    // Your code here
}
```

**Example**:
```javascript
console.log(isDivisible(10, 2))  // Output: true
console.log(isDivisible(7, 3))   // Output: false
```

---

### Exercise 13: Leap Year Checker
Write a function called `isLeapYear` that takes a year as a parameter and returns `"Leap Year"` if it’s a leap year and `"Not a Leap Year"` otherwise. (A leap year is divisible by 4 but not by 100 unless also divisible by 400.)

```javascript
function isLeapYear(year) {
    // Your code here
}
```

**Example**:
```javascript
console.log(isLeapYear(2020))  // Output: "Leap Year"
console.log(isLeapYear(1900))  // Output: "Not a Leap Year"
```

---

### Exercise 14: Last Digit Check
Write a function called `sameLastDigit` that takes two numbers as parameters and returns `true` if they have the same last digit, and `false` otherwise.

```javascript
function sameLastDigit(num1, num2) {
    // Your code here
}
```

**Example**:
```javascript
console.log(sameLastDigit(27, 57)) // Output: true
console.log(sameLastDigit(23, 89)) // Output: false
```

---
### Exercise 15: Last Digits Check
Write a function called `sameLastDigits` that takes two integers and a number *n* of digits as parameters and returns `true` if they have the same *n* digits, and `false` otherwise.

```javascript
function sameLastDigit(num1, num2, numOfDigits) {
    // Your code here
}
```

**Example**:
```javascript
console.log(sameLastDigit(1327, 127, 2))   // Output: true
console.log(sameLastDigit(23, 89, 1))      // Output: false
```

---
### Exercise 16: Convert Minutes to Hours and Minutes
Write a function called `convertMinutes` that takes a number of minutes as a parameter and returns a string in the format `"X hours Y minutes"`.

```javascript
function convertMinutes(minutes) {
    // Your code here
}
```

**Example**:
```javascript
console.log(convertMinutes(130)) // Output: "2 hours 10 minutes"
console.log(convertMinutes(45))  // Output: "0 hours 45 minutes"
```

---

### Exercise 17: Eligibility for a Discount
Write a function called `calculateDiscount` that takes a total purchase amount as a parameter. Return the price with a 10% discount if the amount is over 100 or with a 15% discount if the price is 200 or more. Otherwise return the price inchanged.

```javascript
function calculateDiscount(total) {
    // Your code here
}
```

**Example**:
```javascript
console.log(calculateDiscount(120)) // Output: 108
console.log(calculateDiscount(220)) // Output: 187
console.log(calculateDiscount(85))  // Output: 85
```

---

### Exercise 18: Add Two Numbers
Write a function called `addTwoNumbers` that prompts the user to enter two numbers. Display an logs with the sum of these numbers.

```javascript
function addTwoNumbers() {
    // Your code here
}
```

---

### Exercise 19: Rectangle
Write a function called `rectangleArea` that prompts the user to enter the length and width of a rectangle. log the area of the rectangle and the sum of its width and length.

```javascript
function rectangleArea() {
    // Your code here
}
```

---
