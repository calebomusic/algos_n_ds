/*
  An ant is sitting on an infiinit grid of white and black squares.
  Initially, the grid is all white and the ant faces right.
  At each step it does the following:
  (1) at a white square, flip the color of the square, turn 90 degrees right,
      and move forward one unit.
  (2) at a black square, flip the color of the square, turn 90 degrees left,
      and move forward one unit

  Write a program to simulate the first K moves that the ant makes and print
  the final board as a grid. Note that you are not provided with the data structure
  to represent the grid. The only input is K.
*/

// Move ant until K
// Resize grid by 2 in whatever direction.

// [0]
// [0, 0]
// [0, 0]

// [0, 0, 0 0]
// [0, 0, 0 0]
// [0, 0, 0 0]
// [0, 0, 0 0]

function resize(grid, dir) {
  let newSize = grid.length * 2,
      newGrid = [],
      oldBeg, oldEnd;

  if (dir === 'right') {
    oldBeg = 0
    oldEnd = grid.length - 1;
  } else {
    oldBeg = newSize - grid.length;
    oldEnd = newSize - 1;
  }

  for (var i = 0; i < newSize; i++) {
    newGrid[i] = [];
    for (var j = 0; j < newSize; j++) {
      if (oldBeg <= i && oldEnd >= i && oldBeg <= j && oldEnd >= j) {
        newGrid[i][j] = grid[i % grid.length][j % grid.length];
      } else {
        newGrid[i][j] = 1;
      }
    }
  }

  return newGrid;
}

DIR = { up: [-1, 0],
        right: [0, 1],
        left: [0, -1],
        down: [1, 0]
      }
CLOCK = { up: 'right',
          right: 'down',
          down: 'left',
          left: 'up'
        }

COUNTER = { up: 'left',
            left: 'down',
            down: 'right',
            right: 'up'
          }

function walk(n) {
  let grid = [[1]],
      pos = [0, 0],
      dir = 'right';
  for (var i = 0; i < n; i++) {
    if (outOfBounds(grid.length - 1, pos)) {
      if (pos[0] < 0 || pos[1] < 0) {
        pos = [pos[0] + grid.length, pos[1] + grid.length];
        grid = resize(grid, 'left');
      } else {
        grid = resize(grid, 'right');
      }
    }


    if (grid[pos[0]][pos[1]] === 1) {
      grid[pos[0]][pos[1]] = 0;
      dir = CLOCK[dir];
    } else {
      grid[pos[0]][pos[1]] = 1;
      dir = COUNTER[dir];
    }

    let [dx, dy] = DIR[dir];
    pos = [pos[0] + dx, pos[1] + dy];
  }

  console.log(grid);
}

function outOfBounds(size, pos) {
  let [x, y] = pos;

  if (x < 0 || x >= size || y < 0 || y >= size) {
    return true;
  } else {
    return false;
  }
}

walk(11)
