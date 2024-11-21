'use strict'
// https://bost.ocks.org/mike/shuffle/
function shufflearr(arr, mutate) {
  var copy = [], n = arr.length, i, t

  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--)

    if (mutate) {
      t = arr[n];
      arr[n] = arr[i];
      arr[i] = t;
    } else copy.push(arr.splice(i, 1)[0])
  }

  return mutate ? arr : copy
}

console.log(shufflearr([1, 2, 3, 4], true))   
// Output: [2, 4, 3, 1] (changes the original arr)

console.log(shufflearr(['dog', 'cat', 'bob'], false))  
// Output: ['bob', 'cat', 'dog'] (The original arr remains unchanged)