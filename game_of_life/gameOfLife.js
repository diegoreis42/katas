const readline = require('readline')

const width = 30;
const height = 15;
const interval = 200;

const initializeGrid = () => {
  const grid = []
  for (let i = 0; i < height; i++) {
    grid[i] = Array.from({ length: width }, () => Math.random() > 0.7 ? 1 : 0)
  }

  return grid
}

const printGrid = (grid) => {
  console.clear();
  for (let row of grid) {
    console.log(row.map(cell => (cell === 1 ? '■' : ' ')).join(' '));
  }
}

const updateGrid = (grid) => {
  const newGrid = []

  for (let i = 0; i < height; i++) {
    newGrid[i] = []
    for (let j = 0; j < width; j++) {
      const neighbors = countNeighbors(grid, i, j);
      if (grid[i][j] === 1) {
        newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[i][j] = neighbors === 3 ? 1 : 0;
      }
    }
  }

  return newGrid;
}


const countNeighbors = (grid, x, y) => {
  let count = 0
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;
      if (neighborX >= 0 && neighborX < height && neighborY >= 0 && neighborY < width) {
        count += grid[neighborX][neighborY];
      }
    }
  }

  count -= grid[x][y];

  return count
}


const runGame = () => {
  let grid = initializeGrid();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const iterate = () => {
    printGrid(grid);
    grid = updateGrid(grid);
    setTimeout(iterate, interval);
  };

  iterate();

  rl.on('close', () => {
    process.exit(0)
  })
}

runGame();

