var nums = [1, 3, 5, 7]

console.log(nums)
console.log(nums.length)
console.log(typeof nums)

console.log(nums[0])
console.log(nums[1])
console.log(nums[10])

nums[4] = 10
console.log(nums)

nums[14] = 10
console.log(nums)
console.log(nums[8])

nums[7] = 'baba'

for(var i = 0; i < nums.length; i++){
    console.log(nums[i])
}
