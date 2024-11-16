'use strict'

function ageCategory(age) {
    if (age < 13 && age > 0) {
        return ('Child')
    } else if (age <= 19 && age >= 13) {
        return ('Teen')
    } else if (age >= 20) {
        return ('Adult')
    } else return ("Invalid age")
}

var age1 = 2
var age2 = 13
var age3 = 20
var age4 = -2


console.log(`The age ${age1} is ${ageCategory(age1)}`)
console.log(`The age ${age2} is ${ageCategory(age2)}`)
console.log(`The age ${age3} is ${ageCategory(age3)}`)
console.log(`The age ${age4} is ${ageCategory(age4)}`)

