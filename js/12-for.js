'use strict'

// for(var i = 0; i < 10; i++){
//     if (i % 3 === 0) continue
//     console.log(i)
// }

// console.log('After')

// Multiplication table

for(var i = 1; i <= 10; i++){
    var line = ''

    for(var j = 1; j <= 10; j++){
        line += (i * j) + '\t'
    }
    console.log(line)
}