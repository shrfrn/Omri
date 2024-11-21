'use strict'

var student = {
	name: 'Bob',
	grade: 90,
}

console.log(student)
console.log(student.name)
console.log(student.grade)
console.log(student.age)

student.age = 10
console.log(student.age)

var students = [
    { name: 'Bob', grade: 90 },
    { name: 'Boob', grade: 10 },
    { name: 'Alberg', grade: 50 },
]

console.log(students)

console.log(students[1].grade)

var prop = 'age'
console.log(student[prop])

console.log(student['max-age'])
student['max-age'] = 9
console.log(student['max-age'])