// Implement an algorithm to print all valid combinations of n pairs of
// parentheses

/*
  At each step an open paren can be added if there are open parens left.
  At each step a closed paren can be added if the num of remaining open parens
  is less than the number of remaining closed parens.
*/

function parens(n) {
  parensHelper(n, n, '');
}

function parensHelper(open, closed, str) {
  if (open === 0 && closed === 0) {
    console.log(str);
  }

  if (open > 0) {
    parensHelper(open - 1, closed, str + '(');
  }

  if (open < closed && closed > 0) {
    parensHelper(open, closed - 1, str + ')');
  }
}
