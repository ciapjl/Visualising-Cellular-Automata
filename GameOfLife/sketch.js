//Please read README.md for background. It is key to understand the following.


//Following outlines the logic/thinking behind the code.

//The game of life is a cellular automata that can be thought of as 2 dimensional which updates
//based on simple couting procedure and creates interesting high level emergent phenomena.

//The structure of the code is fairly simple and self descriptive. At a high level we have a underlying two dimensional
// array which represents the game state. The  two large functions:
//
// 1. A setup funciton in which the first generation is initialized by creating and populating a 2d array with binary values
// representing live and dead cells.
// 2. A rendering function in which:
//       a. The underlying 2d array is drawn on a canvas using the relevant p5 methods.
//       b. The next generation or "update" is calculated and then replaces the main (2d) array

//NOTE: the setup() function in p5.js is called at soon as the program is run, and the draw() function is run in a continuous
// loop, hence the need to put the update function in the draw() function.

//Here N is the number of each cell to be drawn (and so of course the scales with the size of the two-d array), 
//while square size is the size of each indivual cell to be drawn. The grid variable is the underlying array 
//which will represent our game state.


//

let N = 80;
let SQUARE_SIZE = 5;
let grid;

function setup() {
  //make canvas that scales with square size and the number of cells
  createCanvas(N * SQUARE_SIZE, N * SQUARE_SIZE);

  //create empty two dimensional array
  //Note that the reason why we crate a (N+2)*(N+2) sized array is because of the issue of what happens at the border 
  //of the game from generation to generation. Indeed at any border, cells have fewer neighbouring cells that those 
  //in the center(not on the border); and so the usual updating rules cannot properly apply to them. 
  // There are various ways to resolve this problem but the way I chose to resolve is to fix the 
  //cells on the border and only display all the cells in the center. This creates some biasing behaviour 
  //towards the edges of the game screen but ensures that every cell displayed is subject to all the same updating rules.
  //It is also a simple resolution to the issue.

  grid = Array.from(Array(N + 2), () => new Array(N + 2));

  //populate it with random values of either 1 or 0 where 1 indicates that
  //cell is alive while 0 indicates that cell is dead

  for (let x = 0; x < N + 2; x++) {
    for (let y = 0; y < N + 2; y++) {
      grid[x][y] = Math.round(Math.random());
    }
  }
}

//The updating rules depend on couting the number of numbers of live/dead neighbours a cell has
//hence having a function dedicated to this functionality makes sense

function countNeighbours(x, y, grid) {
  let numNeighboursActive = 0;
  for (let r = -1; r < 2; r += 1) {
    for (let s = -1; s < 2; s += 1) {
      numNeighboursActive += grid[x + r][y + s];
    }
  }

  numNeighboursActive -= 2 * grid[x][y];

  return numNeighboursActive;
}

//the updating function which encodes the updating rules(which cells become alive or die depending on their previous state) and
//replaces the previous generation as the current state of the underlying array

function nextGen() {
  let newGrid = grid;

  for (let x = 1; x < N; x++) {
    for (let y = 1; y < N; y++) {
      if (grid[x][y] === 1) {
        if (countNeighbours(x, y, grid) < 2) {
          newGrid[x][y] = 0;
        } else if (
          countNeighbours(x, y, grid) === 2 ||
          countNeighbours(x, y, grid) === 3
        ) {
          newGrid[x][y] = 1;
        } else {
          newGrid[x][y] = 0;
        }
      } else {
        if (countNeighbours(x, y, grid) === 3) {
          newGrid[x][y] = 1;
        }
      }
    }
  }


  return newGrid;
}

function draw() {
  background(255);
  for (let x = 1; x < N; x++) {
    for (let y = 1; y < N; y++) {
      if (grid[x][y] === 1) {
        fill(0);
        circle(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE / 2);
      }
    }
  }

  grid = nextGen();
}
