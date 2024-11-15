// Read positive numbers until their sum is greater than 100
// Print sum, max, avg

printStats()
function printStats() {
    var sum = 0
    var max = 0
    var counter = 0

    while (sum <= 100) {
        var num = +prompt('Enter number')
        sum += num
        counter++

        if (num > max) max = num

        console.log('sum: ', sum)
        console.log('max: ', max)
    }

    console.log('After loop')
    console.log('sum: ', sum)
    console.log('max: ', max)
    console.log('avg: ', sum / counter)
}