// Design an algorithm to determine whether someone has won a game of tic tac toe.

/*
Ask about the properties of the board. 2D array? Pieces are symbols? Etc.

Ask if we know the last move. Ask if we should preprocess, store possible boards in hashMap, etc.
Ask if we need a solution for 3x3 or NxN boards.

3 ways a given player can win: horizontal, vertical, diag. We can write helpers
to manage these.

Function takes in board and team symbol
*/

// Below supposes that we don't know the last move, don't need to preprocess,
// and need to have a function for NxN

const hasWon = (board, mark) =>  {
  const allArrs = [transpose(board), board, diagonals(board)].reduce((sum, arr) => {
    return sum.concat(arr);
  })

  for (var i = 0; i < allArrs.length; i++) {
    if(winningArr(allArrs[i], mark)) {
      return true;
    }
  }

  return false;
}

const transpose = (board) => {
  let result = []

  for (var a = 0; a < board[0].length; a++) {
    result[a] = [];
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      result[j][i] = board[i][j];
    }
  }

  return result;
}

const diagonals = (board) => {
  let result = [[], []];
  let last = board.length - 1;

  for (var i = 0; i < board.length; i++) {
    result[0][i] = board[i][i]
  }

  for (var j = 0; j < board.length; j++) {
    result[1][j] = board[last - j][j];
  }

  return result
}

const winningArr = (arr, mark) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== mark) {
      return false
    }
  }

  return true;
}

const no = [['x', 'o', null], ['x', null, 'o'], ['o', 'x', 'x']];
const yes = [['x', 'o', null], ['x', 'x', 'o'], ['o', 'o', 'x']];
const yesAgain = [['x', 'x', 'x'], ['o', 'x', 'o'], ['o', 'o', 'x']];
const yesAgainAgain = [['x', 'o', 'x'], ['o', 'x', 'x'], ['o', 'o', 'x']];

console.log(hasWon(no, 'x'));
console.log(hasWon(yes, 'x'));
console.log(hasWon(yesAgain, 'x'));
console.log(hasWon(yesAgainAgain, 'x'));
