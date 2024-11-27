'use strict'
const ROWS = 20
const COLS = 20
const SMALLEST_NUMBER = 0
const LARGEST_NUMBER = 2
var NUMBER_OF_GENERATIONS = 30
var gGrid = createGrid(ROWS, COLS, SMALLEST_NUMBER, LARGEST_NUMBER)
const gIntervalId = setInterval(startGame, 300)


function createGrid(x, y, minNum, maxNum) {
    var row = []
    var grid = []
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            row[j] = getRandomInt(minNum, maxNum)
        }
        grid[i] = row
        row = []
    }
    return grid
}

function getRandomInt(min, max) {
    if (min === max) return min
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

function printGrid(grid) {
    console.clear()
    var printableGrid = []
    for (var i = 0; i < grid.length; i++) {
        printableGrid[i] = []
        for (var j = 0; j < grid[i].length; j++) {
            const displayVal = grid[i][j] ? '*' : ' '
            printableGrid[i][j] = displayVal
        }
    }
    console.table(printableGrid)
}

function getNextState(grid) {
    var nextState = []
    for (var i = 0; i < grid.length; i++) {
        nextState[i] = []
        for (var j = 0; j < grid[i].length; j++) {
            var neighboursCount = countNeighbors(grid, i, j)
            if (grid[i][j] && (neighboursCount === 2 || neighboursCount === 3)) nextState[i][j] = grid[i][j]
            else if (!grid[i][j] && neighboursCount === 3) nextState[i][j] = 1
            else nextState[i][j] = 0
        }
    }
    return nextState
}

function countNeighbors(grid, x, y) {
    var neighboursAlive = 0
    var max = grid.length - 1
    var fromX = (x - 1 > 0) ? x - 1 : 0
    var fromY = (y - 1 > 0) ? y - 1 : 0
    var toX = (x + 1 <= max) ? x + 1 : max
    var toY = (y + 1 <= max) ? y + 1 : max
    for (var i = fromX; i <= toX; i++) {
        for (var j = fromY; j <= toY; j++) {
            if (i === x && j === y) continue
            if (grid[i][j] === 1) neighboursAlive++
        }
    }
    return neighboursAlive
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
    NUMBER_OF_GENERATIONS--
    if (NUMBER_OF_GENERATIONS === 0 || sumMatrix(grid) === 0) clearInterval(gIntervalId)
}

function sumMatrix(grid) {
    var retSum = 0
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            retSum += row[j];
        }
    }
    return retSum
}