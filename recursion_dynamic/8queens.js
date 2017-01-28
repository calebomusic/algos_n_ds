// Write an algorithm to print all ways of arranging eight queens on a
// 8x8 chess board so that none of them share the same row, column, or diagonal.

/*
  How do you do this without copying the entire grid? Represent the board
  in a single array. i is the column, arr[i] is the row.


*/

function eightQueens(board = []) {
  if (board.length === 8) {
    return 1;
  }

  let total = 0;

  for (var row = 0; row < 8; row++) {
    if (validPos(board, row)) {
      board.push(row);
      total += eightQueens(board);
      board.pop();
    }
  }

  return total;
}

function validPos(board, row) {
  let col = board.length,
      diff = row - col,
      sum = row + col;

  for (var queenCol = 0; queenCol < board.length; queenCol++) {
    let queenRow = board[queenCol],
        queenDiff = queenRow - queenCol,
        queenSum = queenRow + queenCol;

    if (diff === queenDiff || row === queenRow || sum === queenSum) {
      return false;
    }
  }

  return true;
}

console.log(eightQueens());
