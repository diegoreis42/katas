document.addEventListener("DOMContentLoaded", function() {
  const width = 40;
  const height = 15;
  const interval = 200;

  let grid = initializeGrid();

  function initializeGrid() {
    const grid = [];
    for (let i = 0; i < height; i++) {
      grid[i] = Array.from({ length: width }, () => Math.random() > 0.7 ? 1 : 0);
    }
    return grid;
  }

  function updateGrid() {
    const newGrid = [];
    for (let i = 0; i < height; i++) {
      newGrid[i] = [];
      for (let j = 0; j < width; j++) {
        const neighbors = countNeighbors(i, j);
        if (grid[i][j] === 1) {
          newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          newGrid[i][j] = neighbors === 3 ? 1 : 0;
        }
      }
    }
    grid = newGrid;
  }

  function countNeighbors(x, y) {
    let count = 0;
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
    return count;
  }

  function renderGrid() {
    const table = document.getElementById("grid");
    table.innerHTML = "";

    for (let i = 0; i < height; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < width; j++) {
        const cell = document.createElement("td");
        cell.className = grid[i][j] === 1 ? "alive" : "";
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

  function iterate() {
    updateGrid();
    renderGrid();
    setTimeout(iterate, interval);
  }

  iterate();
});
