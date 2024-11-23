### Implement Conway's Game of Life in the Console

### **Instructions**

1. **Setup the Grid**
   - Define a 2D array to represent the grid.
   - Use a fixed grid size (e.g., 20x20).
   - Initialize the grid with random 1s (alive cells) and 0s (dead cells).

2. **Display the Grid**
   - Write a function `printGrid(grid)` to render the grid in the console:
     - Use blanks for dead cells and `*` for alive cells.
     - Use `console.clear()` before printing each new generation for animation-like behavior.

1. **Define Game Rules**
   - Implement a function `getNextState(grid)`:
     - Apply the four rules of Conway's Game of Life to generate the next grid state:
       1. Any live cell with 2 or 3 live neighbors survives.
       2. Any dead cell with exactly 3 live neighbors becomes a live cell.
       3. All other live cells die in the next generation.
       4. All other dead cells stay dead.
     - Use a helper function `countNeighbors(grid, x, y)` to calculate the number of live neighbors for a cell.
     - In order to generate the new grid correctly, you will need to calculate the state of each cell in the new grid and write it to a separate new grid. Create a `generateMatrix(rows, cols)` function to do this.

1. **Simulate the Colonie's Evolution**
   - Write a `startGame()` function to:
     - Initialize a random grid.
     - Setup an interval using `setInterval` to generate the next grid state and print it every 300ms.

2. **Run the Program**
   - Call `startGame()` to observe the simulation.