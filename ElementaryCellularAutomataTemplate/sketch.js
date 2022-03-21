



let N_ROWS = 127;
let N_COLS = 300;
let SQUARE_SIZE = 2;
let grid;

let RULE_NUM = 90;
let RULE = RULE_NUM.toString(2)
  .split("")
  .map((e) => Number(e));

while (RULE.length < 8) {
  RULE.unshift(0);
}

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
  //make canvas
  createCanvas(SQUARE_SIZE * N_COLS, SQUARE_SIZE * N_ROWS);

  grid = Array.from(Array(N_ROWS), () => new Array(N_COLS));

  for (let x = 0; x < N_COLS; x++) {
    grid[0][x] = 0;
  }

  grid[0][Math.floor(N_COLS / 2)] = 1;

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
