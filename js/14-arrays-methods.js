var nums = [1, 2, 3, 4]

console.log(nums)

var res = nums.push(10, 20, 30)
console.log(res)

console.log(nums)
console.log(nums.pop())
console.log(nums)

var res = nums.unshift(10, 20 ,30)
console.log(res)

console.log(nums)
console.log(nums.shift())
console.log(nums)

// splice

// nums.splice(2, 1)
// console.log(nums)

nums.splice(2, 0, 100, 200)
console.log(nums)
