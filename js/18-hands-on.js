'use strict'

// An array of numbers with the values 0 - 3
// i.e.  [3, 2, 2, 0, 3]
// Count how many instances of each value


var nums = [3, 2, 2, 0, 3]

function countInstances() {
    var counters = [0, 0, 0, 0]

    for(var i = 0; i < nums.length; i++){
        counterIdx = nums[i]
        counters[counterIdx]++
    }
}