'use strict'

const ROWS = 5
const COLS = 5

const SMALLEST_NUMBER = 1
const LARGEST_NUMBER = 100

const gPlayers = [
	{ name: 'Mebahem', card: createCard(ROWS, COLS) },
	{ name: 'Alberg', card: createCard(ROWS, COLS) },
]

var gLots = initArray(SMALLEST_NUMBER, LARGEST_NUMBER)

const gIntrvalId = setInterval(startBingo, 300)

function shuffle(array) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
	}
	return array
}

function initArray(from, to) {
	var nums = []

	for (var i = from; i <= to; i++) {
		nums.push(i)
	}
	return shuffle(nums)
}

function createCard(rows, cols) {
	var card = []
	var numbers = initArray(SMALLEST_NUMBER, LARGEST_NUMBER)

	for (var i = 0; i < rows; i++) {
        card[i] = []
		for (var j = 0; j < cols; j++) {
			card[i][j] = { value: numbers.pop(), isHit: false }
		}
	}
	return card
}

function getUniqueRandom(preDefinedList) {
	return preDefinedList.pop()
}

function printCard(card) {
	var printableCard = []

	for (var i = 0; i < card.length; i++) {
		printableCard[i] = []
		for (var j = 0; j < card[i].length; j++) {
			const prefix = card[i][j].isHit ? 'X' : ''
			printableCard[i][j] = prefix + card[i][j].value
		}
	}
	console.table(printableCard)
}

function markCard(card, number) {
	var currentNumber = null

	for (var i = 0; i < card.length; i++) {
		const row = card[i]
		for (var j = 0; j < row.length; j++) {
			currentNumber = row[j].value
			if (currentNumber === number) return (row[j].isHit = true)
		}
	}
}

function checkBingo(card, i, j) {
	if (checkRows(card, i) || checkCols(card, j) || checkDiag(card)) return true

	return false
}

function checkRows(card) {
	for (var i = 0; i < card.length; i++) {
		var row = card[i]
		if (row.every(cell => cell.isHit)) {
			console.log(`Bingo found on row ${i}`)
			return true
		}
	}
	return false
}

function checkCols(card) {
	// for(var i = 0; i < card.length; i++){
	//     for(var j = 0; j < card[i].length; j++){
	//         if (!card[j][i].isHit) return false
	//     }
	// }
	// return true

	for (var i = 0; i < card.length; i++) {
		var col = []
		for (var j = 0; j < card.length; j++) {
			const row = card[j]
			col.push(row[i])
		}
		if (col.every(cell => cell.isHit)) {
			console.log(`Bingo found on col ${i}`)
			return true
		}
	}
	return false
}

function checkDiag(card) {
	for (var i = 0; i < card.length; i++) {
		if (!card[i][i].isHit) return false
	}
	return true
}

function startBingo() {
	var isBingo = playTurn()
	if (isBingo) clearInterval(gIntrvalId)
}

function playTurn() {
	var currentNumber = getUniqueRandom(gLots)
	var isBingo = false

	for (var i = 0; i < gPlayers.length; i++) {
		const card = gPlayers[i].card

		markCard(card, currentNumber)
		console.log(`${gPlayers[i].name}'s card:`)
		printCard(card)

		isBingo = checkBingo(card)
		if (isBingo) {
			console.log(`the winner is: ${gPlayers[i].name}`)
			return isBingo
		}
	}
	return isBingo
}
