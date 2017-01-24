/*
  You are building a diving board by placing a bunch of planks of wood,
  end-to-end. There are two types of planks, one of length shorter and one of
  length longer. You must use exactly K planks of wood. Write a method to generate all
  possible lengths of the diving board.
*/

/*
There's a recursive solution. An optimized solution using memoization.
There's also a much simpler solution.
*/

const divingBoard = (k, longer, shorter) {
  let currLength = k * longer,
      lengths = [ currLength ],
      diff = longer - shorter;

  for (var i = 0; i <= k; i++) {
    currLength -= diff;
    lengths.push(currLength);
  }

  return lengths;
}
