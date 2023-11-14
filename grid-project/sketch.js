// 2D Grid Array/ SNAKE GAME
// Anamol Dhakal
// 10/20/2023
// Extra for Experts: There is nothing in particular that I did in this project that would be worth to consider Extra for Experts.

// setting variables and logic
const rows = 25;
const cols = 25;
const cellSize = 25;
let grid;
let player;
let target;

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  grid = createGrid(cols, rows);
  player = createPlayer();
  target = createTarget();
}

function draw() {
  background(255);
  displayGrid();
  displayPlayer();
  displayTarget();
}
// checks key inputs an moves
function keyPressed() {
  const { x, y } = player;
  if (keyCode === UP_ARROW && y > 0 && !grid[y - 1][x].obstacle) {
    player.y -= 1;
  } 
  else if (keyCode === DOWN_ARROW && y < rows - 1 && !grid[y + 1][x].obstacle) {
    player.y += 1;
  } 
  else if (keyCode === LEFT_ARROW && x > 0 && !grid[y][x - 1].obstacle) {
    player.x -= 1;
  } 
  else if (keyCode === RIGHT_ARROW && x < cols - 1 && !grid[y][x + 1].obstacle) {
    player.x += 1;
  }
// console logs a win message
if (player.x === target.x && player.y === target.y) {
    console.log("You reached the target!");
  }
}
// creates the grid
function createGrid(cols, rows) {
  const grid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      grid[i][j] = {
        obstacle: random() > 0.8, // 20% chance of being an obstacle
      };
    }
  }
  return grid;
}
// creates the player
function createPlayer() {
  return {
    x: 0,
    y: 0,
  };
}
// creates the target
function createTarget() {
  let target;
  do {
    target = {
      x: floor(random(cols)),
      y: floor(random(rows)),
    };
  } while (grid[target.y][target.x].obstacle);
  return target;
}
// displays everything
function displayGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * cellSize;
      const y = i * cellSize;
      fill(grid[i][j].obstacle ? 0 : 255);
      stroke(0);
      rect(x, y, cellSize, cellSize);
    }
  }
}

function displayPlayer() {
  const x = player.x * cellSize + cellSize / 2;
  const y = player.y * cellSize + cellSize / 2;
  fill(0, 0, 255);
  noStroke();
  ellipse(x, y, cellSize * 0.8);
}

function displayTarget() {
  const x = target.x * cellSize + cellSize / 2;
  const y = target.y * cellSize + cellSize / 2;
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, cellSize * 0.8);
}


