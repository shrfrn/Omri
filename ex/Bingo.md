#### Objective:

Create a console-based Bingo game in JavaScript. 

- The game should generate a 5x5 card for each player with numbers randomly selected from the range 1-99. 
- Numbers are then called one by one at random. 
- The program should mark them on the each player's card and detect when any the players gets Bingo (a complete row, column, or diagonal). 
- When a Bingo is detected the game stops and the name of the winner and the details of his victory are logged to the console.

---

### **Instructions**

start with the following data structure:

```javascript
const players = [
	{ name: 'Mebahem', card: createCard() },
	{ name: 'Alberg', card: createCard() },
]
```

The cards are matrices of objects like this:

```js
// Each cell is an object with this structure:

{
	value: 3,       // The number in the cell
	isHit: false,   // true if that number has been called
}
```


1. **Create a Bingo Card**
   - Write a function `createCard()` which creates a 5x5 matrix of cell objects, each with a unique value randomly chosen from the range 1-99.
   

1. **Display the Card**
   - Implement a `printCard(card)` function:
     - Print the card to the console using `console.table()`. 
     - To make the printout readable, you will need to log a textual representation of the cell object.
     - Use the cells value to represent an unmarked (uncalled) number.
     - Use the cells value preceded with an `X` to represent a marked (called) number.

1. **Simulate Number Calling**
   - Write a function `callNumber()` which randomly picks a number from the range 1-99. Ensure numbers are not repeated.

4. **Mark Numbers on the Card**
   - Implement a `markCard(card, number)` function to:
     - Search for the called number on the card.
     - If a cell with that number is found, update the cell's `isHit` property to `true`
5. **Check for Bingo**
   - Write a `checkBingo(card)` function to:
     - Detect if there’s a complete row, column, or diagonal of  `isHit: true`.

6. **Run the Game**
   - Create a `startBingo()` which will:
     
     - Start an interval using `setInterval()` to run a `playTurn()` function which will:
       1. Call a number.
       2. Display the updated cards.
       3. Check for Bingo.
     - End the game when Bingo is achieved, and display the winning message.