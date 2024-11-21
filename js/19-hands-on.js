'use strict'

var gNextId = 101
var gPlayers = []

createPlayers()
console.log(gPlayers)

// var player = findPlayerById(102)
// console.log(player)

var bestPlayer = findBestPlayer()
console.log(bestPlayer)

var bestPlayers = findBestPlayers()
console.log(bestPlayers)

function createPlayers() {
	const names = ['Alberg', 'Mebahem', 'Munir', 'Zilber']

	for (var i = 0; i < names.length; i++) {
		gPlayers.push(createPlayer(names[i]))
	}
}

function createPlayer(name) {
	return {
		id: gNextId++,
		name,
		score: getRandomInt(0, 10),
	}
}

function findPlayerById(id) {
	for (var i = 0; i < gPlayers.length; i++) {
		if (gPlayers[i].id === id) return gPlayers[i]
	}
	return null
}

function findBestPlayer() {
	var maxScore = 0
	var bestPlayer = null

	for (var i = 0; i < gPlayers.length; i++) {
		if (gPlayers[i].score > maxScore) {
			maxScore = gPlayers[i].score
			bestPlayer = gPlayers[i]
		}
	}
	return bestPlayer
}

function findBestPlayers() {
	var maxScore = 0
	var bestPlayers = []

	for (var i = 0; i < gPlayers.length; i++) {
		if (gPlayers[i].score > maxScore) {
			maxScore = gPlayers[i].score
			bestPlayers = [gPlayers[i]]
		} else if (gPlayers[i].score === maxScore) {
			bestPlayers.push(gPlayers[i])
		}
	}
	return bestPlayers
}

function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}
