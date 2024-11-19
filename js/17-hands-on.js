'use strict'

var studentNames = ['Bob', 'Albert', 'Mebahem']
var studentGrades = [40, 70, 80]

// addStudent()
printBestStudent()
printStudents()


function printStudents() {
    for(var i = 0; i < studentNames.length; i++){
        console.log(studentNames[i], studentGrades[i])
    }
}

function addStudent() {
    var name = prompt('Enter a name')
    var grade = +prompt('Enter a grade')

    studentNames.push(name)
    studentGrades.push(grade)
}

function printBestStudent() {
    var bestStudentIdx = 0

    for(var i = 1; i < studentNames.length; i++){
        if (studentGrades[i] > studentGrades[bestStudentIdx]) {
            bestStudentIdx = i
        }
    }
    console.log(studentNames[bestStudentIdx], studentGrades[bestStudentIdx] )
}

// function printBestStudent() {
//     var bestName = studentNames[0]
//     var bestGrade = studentGrades[0]

//     for(var i = 1; i < studentNames.length; i++){
//         if (studentGrades[i] > bestGrade) {
//             bestGrade = studentGrades[i]
//             bestName = studentNames[i]
//         }
//     }
//     console.log(bestGrade, bestName)
// }
