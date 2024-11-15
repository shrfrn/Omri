// var count = 0

// while (count < 10) {
//     console.log(count)
//     count++
// }

// console.log('Done', count)

// var num = 45678

// while (num > 0) {
//     var digit = num % 10
//     console.log(digit)
//     num = parseInt(num / 10)
// }

// function factorial(num) {
//     var res = 1
//     var i = 2

//     while (i <= num) {
//         res *= i++
//     }
//     return res
// }

// var res = factorial(3)
// console.log(res)

// var res = factorial(6)
// console.log(res)

var choice = +prompt('Enter your choice')

while (choice !== 0) {
    console.log(choice)
    choice = +prompt('Enter your choice')
}

console.log('bye')