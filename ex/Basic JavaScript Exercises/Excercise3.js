'use strict'

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A"
    } else if (score >= 80 && score < 90) {
        return "B"
    } else if (score >= 70 && score < 80) {
        return "C"
    } else if (score >= 60 && score < 70) {
        return "D"
    } else if (score >= 0 && score < 60) {
        return "F"
    } else return "score is not valid"
}

var score1 = 90
var score2 = 80
var score3 = 70
var score4 = 60
var score5 = 59
var score6 = 101
var score7 = -5

console.log("the grade of ", score1, "is ", getGrade(score1))
console.log("the grade of ", score2, "is ", getGrade(score2))
console.log("the grade of ", score3, "is ", getGrade(score3))
console.log("the grade of ", score4, "is ", getGrade(score4))
console.log("the grade of ", score5, "is ", getGrade(score5))
console.log("the grade of ", score6, "is ", getGrade(score6))
console.log("the grade of ", score7, "is ", getGrade(score7))

