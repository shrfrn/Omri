'use strict'

var nums1 = [11, 2, 3]
var nums2 = [4, 5, 6]
var nums3 = [7, 8, 9]

var mat = [nums1, nums2, nums3]

// console.log(mat)
// console.log(mat[0])
// console.log(mat[0][0])
// console.log(mat[0][8])
// console.log(mat[8][0])


function createMat(rows, cols) {
    var mat = []
    
    for(var i = 0; i < rows; i++){
        mat[i] = []     // map.push([])
        for(var j = 0; j < cols; j++){
            mat[i][j] = '*'
        }
    }
    return mat
}

// console.table(createMat(4, 5))

function createMultTable(rows, cols) {
    var mat = []

    for(var i = 0; i < rows; i++){
        mat[i] = []
        for(var j = 0; j < cols; j++){
            mat[i][j] = (i + 1) * (j + 1)
        }
    }
    return mat
}

var multTable = createMultTable(10, 10)
// console.table(multTable)

const max = findMaxInMatrix(mat)
console.log(max)

function findMaxInMatrix(mat) {
    var max = 0
    for(var i = 0; i < mat.length; i++){
        for(var j = 0; j < mat[i].length; j++){
            if (mat[i][j] > max) max = mat[i][j]
        }
    }
    return max
}