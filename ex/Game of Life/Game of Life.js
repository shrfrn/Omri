'use strict'
const ROWS = 20
const COLS = 20

const SMALLEST_NUMBER = 0
const LARGEST_NUMBER = 2

var gNumOfGeneretions = 30

var gGrid = createGrid(ROWS, COLS, SMALLEST_NUMBER, LARGEST_NUMBER)
const gIntervalId = setInterval(startGame, 300)

function createGrid(rows, cols, minNum, maxNum) {
	var grid = []

	for (var i = 0; i < rows; i++) {
		grid[i] = []
		for (var j = 0; j < cols; j++) {
			grid[i][j] = getRandomInt(minNum, maxNum)
		}
	}
	return grid
}

// function createGrid(x, y, minNum, maxNum) {
// 	var row = []
// 	var grid = []

// 	for (var i = 0; i < x; i++) {
// 		for (var j = 0; j < y; j++) {
// 			row[j] = getRandomInt(minNum, maxNum)
// 		}
// 		grid[i] = row
// 		row = []
// 	}
// 	return grid
// }

function getRandomInt(min, max) {
	if (min === max) return min
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

function printGrid(grid) {
    var printableGrid = []

	console.clear()
	for (var i = 0; i < grid.length; i++) {
		printableGrid[i] = []
		for (var j = 0; j < grid[i].length; j++) {
			printableGrid[i][j] = grid[i][j] ? '*' : ' '
		}
	}
	console.table(printableGrid)
}

function getNextState(grid) {
	var nextState = []

	for (var i = 0; i < grid.length; i++) {
		nextState[i] = []
		for (var j = 0; j < grid[i].length; j++) {
			var negs = countNeighbors(grid, i, j)

			if (negs === 3 || (grid[i][j] && negs === 2)) {
				nextState[i][j] = 1
			} else {
                nextState[i][j] = 0
			}
		}
	}
	return nextState
}

function countNeighbors(grid, x, y) {
	var negs = 0
	var max = grid.length - 1

	var fromX = x - 1 > 0 ? x - 1 : 0
	var fromY = y - 1 > 0 ? y - 1 : 0

	var toX = x + 1 <= max ? x + 1 : max
	var toY = y + 1 <= max ? y + 1 : max

	for (var i = fromX; i <= toX; i++) {
		for (var j = fromY; j <= toY; j++) {
			if (i === x && j === y) continue
			if (grid[i][j] === 1) negs++
		}
	}
	return negs
}

function startGame() {
	gGrid = playTurn()
	stopGame(gGrid)
}

function playTurn() {
	var newGrid = []
	newGrid = getNextState(gGrid)
	printGrid(newGrid)
	return newGrid
}

function stopGame(grid) {
	gNumOfGeneretions--
	if (gNumOfGeneretions === 0 || isDead(grid)) clearInterval(gIntervalId)
}

function isDead(grid) {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j]) return false
		}
	}
	return true
}
