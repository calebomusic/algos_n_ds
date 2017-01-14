// Given an M x N matrixin which each row and each column is sorted in ascending order,
// write a method to find an element;

// Two functions:

const gridSearch = (grid, min, max, target) => {
  if (!min.inBounds(grid) || !max.inBounds(grid)) {
    return null;
  }

  if (matrix[min.row][min.col] === target) {
    return min;
  } else if (!min.isBefore(max)) {
    return null;
  }

  let start = min;
  let dist = Math.min(max.row - min.row, max.col - min.col);
  let end = new Coord(start.row + dist, start.col + dist);
  let i = new Coord(0, 0);

  while(start.isBefore(end)) {
    if (x > grid[i.row][i.col]) {
      start.row = p.row + 1;
      start.col = i.col + 1;
    } else {
      end.row = i.row - 1;
      end.col = i.col - 1;
    }
  }

  return partitionAndSearch(grid, min, max, start, target)
}

const partitionAndSearch = (grid, min, max, pivot, target) => {
  let bottomLeftMin = new Coord(pivot.row, start.col);
  let bottomLeftMax = new Coord(max.row, pivot.col -1);
  let upperRightMin = new Coord(min.row, pivot.col);
  let upperRightMax = new Coord(pivot.row - 1, max.col);

  let lowerLeftSearch = gridSearch(grid, bottomLeftMin, bottomLeftMax, target);

  if (lowerLeft === null) {
    return gridSearch(grid, upperRightMin, upperRightMax, target);
  }
  return lowerLeft;
}

class Coord {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  inBounds(grid) {
    return this.row >= 0 && this.col >= 0 && this.row < this.grid.length && this.col < this.grid[0].length
  }

  isBefore(coord) {
    return this.row <= coord.row && this.col <= coord.col;
  }


}
