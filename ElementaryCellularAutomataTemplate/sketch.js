
//Please read README.md and possible the Game of Life sketch.js file for background. They are key to understand the following.


//Following outlines the logic/thinking behind the code.

// Recall the the Elementary Cellular Automata(ECA henceforth) are unlike the Game of Life since ECA are only 1-dimensional. 
//To visualise them, we make draw successive rows to represent the changing generations.

// At a high level we have a underlying two dimensional
// array which represents the set of all generations of a the ECA. The top row is the initial state of the ECA, while the 
//nth row is the result of the (n-1)th row updated using the ECA's update rule. Hence the visualisation amounts to history of 
//the generations where more recent generations appear at the bottom and older ones appear at the top.


//The structure is simple: 
//The RULE number is used to make a rule array, which in turn define the transformation rule. 
//Then, the initial state of the ECA is initialized as the first row of a 2-d array. 
//Successive generations are computed using the transformation rule/update rule and appended as rows to the 2-d grid array.

//The draw function then draws out the grid array using the relevant methods.

//
//NOTE: the setup() function in p5.js is called at soon as the program is run, and the draw() function is run in a continuous
// loop, hence the need to put the update function in the draw() function.




//These parameters can be edited to give the best visual results.

let N_ROWS = 127;
let N_COLS = 300;
let SQUARE_SIZE = 2;
let grid;


//this is the RULE number. There are 256 of them, so this code will work for any rule from 1 to 255. Any number outside this
//range will produce a blank page.

//E.g. To get RULE 33; change the RULE_NUM variable to 33. 
//The following lines conver the rule number in decimal to its binary equivalent, which 
//encodes the update rule.
//E.g. 33 is 00100001 in binary so, the rule 33 updates each generation according to the array [0,0,1,0,0,0,0,1], cf transformation function

let RULE_NUM = 90;
let RULE = RULE_NUM.toString(2)
  .split("")
  .map((e) => Number(e));

//adds 0 so that the RULE 
while (RULE.length < 8) {
  RULE.unshift(0);
}


//updating rule dependent on RULE number
function transformationFunction(x, y, z) {
  let concatenated = "" + x + y + z;
  switch (concatenated) {
    case "111":
      return RULE[0];
      break;
    case "110":
      return RULE[1];
      break;
    case "101":
      return RULE[2];
      break;
    case "100":
      return RULE[3];
      break;
    case "011":
      return RULE[4];
      break;
    case "010":
      return RULE[5];
      break;
    case "001":
      return RULE[6];
      break;
    case "000":
      return RULE[7];
      break;
  }
  return 0;
}

function setup() {
  //make canvas that scales with size of the cells
  createCanvas(SQUARE_SIZE * N_COLS, SQUARE_SIZE * N_ROWS);

  //creating empty 2dimensional array where the rows are the generationa and the first row is the 1st generation of the CA.
  grid = Array.from(Array(N_ROWS), () => new Array(N_COLS));


  //we initialise the first generation to be completely empty
  for (let x = 0; x < N_COLS; x++) {
    grid[0][x] = 0;
  }

  //except for the center cell, which we will give an 'alive/on' value.

  grid[0][Math.floor(N_COLS / 2)] = 1;

  //the following rows/generations are then populated according to the update rule/tranformation function calculated from the
  //rule number
  for (let i = 1; i < N_ROWS; i++) {
    for (let j = 1; j < N_COLS - 1; j++) {
      grid[i][j] = transformationFunction(
        grid[i - 1][j - 1],
        grid[i - 1][j],
        grid[i - 1][j + 1]
      );
    }
  }
}


//this rendering function simply draws the 2d array calculated above

function draw() {
  background(255);
  for (let i = 0; i < N_ROWS; i++) {
    for (let j = 1; j < N_COLS - 1; j++) {
      if (grid[i][j] == 1) {
        fill(0);
        rect(j * SQUARE_SIZE, i * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
      }
    }
  }
}
