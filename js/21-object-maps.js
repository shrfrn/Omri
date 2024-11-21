var candidateMap = {
    bob: 16,
    munir: 3,
    alberg: 8,
    avi: 3,
    mebahem: 9,
}

// var candidate = prompt('Who will you vote for?')

// if (candidateMap[candidate]) candidateMap[candidate]++
// else candidateMap[candidate] = 1

// console.log(candidateMap)

for (const key in candidateMap) {
    console.log(`${key} got ${candidateMap[key]}`)
}

var keys = Object.keys(candidateMap)
console.log(keys)

var values = Object.values(candidateMap)
console.log(values)