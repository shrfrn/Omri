'use strict'

var nums1 = [1, 2, 3, 4, 5, 7]
var nums2 = [4, 5, 6, 5, 6, 3]
var nums3 = [7, 8, 9, 6, 8, 1]
var nums4 = [7, 2, 9, 6, 8, 1]
var nums5 = [7, 8, 1, 6, 9, 1]
var nums6 = [9, 8, 9, 2, 8, 1]

var mat = [nums1, nums2, nums3, nums4, nums5, nums6]

getPrimaryDiagonal(mat)

function getPrimaryDiagonal(mat) {
	const diagonal = []

	for (var i = 0; i < mat.length; i++) {
		diagonal.push(mat[i][i])
	}
	console.log(diagonal)
}

// console.log(getSecondaryDiagonal(mat))
function getSecondaryDiagonal(mat) {
    const diagonal = []

    for(var i = 0; i < mat.length; i++){
        diagonal.push(mat[i][mat.length - (i + 1)])
    }
    return diagonal
}

printNegLoop(mat, 2, 2)

function printNegLoop(mat, rowIdx, colIdx) {
    for(var i = rowIdx - 1; i <= rowIdx + 1; i++){
        if (i < 0 || i >= mat.length) continue
        
        for(var j = colIdx - 1; j <= colIdx + 1; j++){
            if (j < 0 || j >= mat[i].length) continue
            if (i === rowIdx && j === colIdx) continue
            console.log(mat[i][j])
        }
    }
}