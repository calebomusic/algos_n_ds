// Implement the "paint fill" function that one might see on many image
// editing programs. That is, given a screen (2D array), a point, and a new
// color, fill in the surrounding area until the color changes from the original color

/*
  DFS from the given point. Paint until all reachable cells
  which include the original color have been painted. A reachable cell is a cell
  that can be reached from the original point and (initially) through cells
  of the original color.
*/

function paintFill(image, newColor, point) {
  let [row, col] = point,
      originalColor = image[row][col];

  return paintFillHelper(image, newColor, point, originalColor);
}

function paintFillHelper(image, newColor, point, originalColor) {
  let [row, col] = point;


  if (image[row][col] === originalColor) {
    image[row][col] = newColor;
  }

  for(let dir of DIR) {
    let [dRow, dCol] = dir,
        newPoint = [row + dRow, col + dCol],
        newPointKey = newPoint[0].toString() + newPoint[1];

    if (inBounds(image, newPoint) && image[newPoint[0]][newPoint[1]] === originalColor) {
        paintFillHelper(image, newColor, newPoint, originalColor);
    }
  }

  return image;
}

function inBounds(image, point) {
  let [row, col] = point;

  if (row >= 0 && row < image.length &&
      col >= 0 && col < image[0].length) {
    return true;
  } else {
    return false;
  }
}

DIR = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0]
];
