'use strict'

function isLeapYear(year) {
    if (year % 4 === 0 
    &&  year % 100 !== 0) {
        return true
    } else return false
}
var year1 = 2020
var year2 = 2000
var year3 = 2004

console.log(`${year1} is a leap year ${isLeapYear(year1)}`)
console.log(`${year2} is a leap year ${isLeapYear(year2)}`)
console.log(`${year3} is a leap year ${isLeapYear(year3)}`)
