'use strict'

function foo() {
    console.log('foo')
}

// setTimeout(foo, 2000)
// setInterval(foo, 500)

var nums = [3, 8, 1, 9, 0, 0, 7]

// console.log(nums)

// nums.sort(function (num1, num2) { return num1 - num2 })
// nums.sort((num1, num2) => { return num1 - num2 })
// console.log(nums)

// function compareNums(num1, num2) {
//     return num1 - num2
// }

function forEach(arr, func) {
    for(var i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

forEach(nums, (num) => { console.log(num) })