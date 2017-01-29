// You have a stack of n boxes with widths w, heights h and depths d.
// The boxes cannot be rotated and can only be stacked on top of one another
// if each boxes in the stack is strictly larger than the box above it in
// width, height, and depth. Implement a method to compute the height of
// the tallest possible stack. The height of a stack is the sum of the
// heights of each box.

/*
  I: array of dim
  O: max height
  E:

  Recurse while keeping track of placed boxes, at each step, place box (if valid),
  remove placed box from unplaced boxes. When no boxes can be placed return
  the sum of all the heights of the current boxes.

  placed, unplaced
*/

function stackOfBoxes(boxes) {
  return maxStackHeight([], boxes);
}

function maxStackHeight(placed, unplaced) {
  if (unplaced.length === 0) {
    return placed.reduce( (sum, box) => sum + box.height, 0)
  }

  let max = placed.reduce( (sum, box) => sum + box.height, 0);

  for(let i = 0; i < unplaced.length; i ++) {
    let currSum = 0,
        box = unplaced[i],
        last = placed[placed.length - 1];

    if (validStack(last, box)) {
      placed.push(box);
      currSum = maxStackHeight(placed, unplaced.slice(0, i) + unplaced.slice(i+1));

      if (currSum > max) {
        max = currSum;
      }
    }
  }

  return max;
}

function validStack(last, box) {
  if(last === undefined) {
    return true;
  }

  return box.width > last.width && box.height > last.height && box.depth > last.depth;
}

function Box(width, height, depth) {
  this.width = width;
  this.height = height;
  this.depth = depth;
}

let a = new Box(2, 3, 4);
let b = new Box(10, 7, 5);
let c = new Box(2, 3, 4);
let d = new Box(2, 3, 4);

console.log(stackOfBoxes([a,b,c,d]));
